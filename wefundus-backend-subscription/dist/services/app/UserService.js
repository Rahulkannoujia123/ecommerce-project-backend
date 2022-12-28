"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const S3Constant_1 = require("../../constants/S3Constant");
const UserModel_1 = require("../../models/UserModel");
const Auth_1 = require("../../utils/Auth");
const Email_1 = require("../../utils/Email");
const FileUpload_1 = require("../../utils/FileUpload");
const AuthService_1 = require("./AuthService");
const ResponseHelper_1 = require("../../helpers/ResponseHelper");
const GroupRequestService_1 = require("./GroupRequestService");
const GroupMemberModel_1 = require("../../models/GroupMemberModel");
const GroupModel_1 = require("../../models/GroupModel");
const GroupMemberInterface_1 = require("../../interfaces/GroupMemberInterface");
class UserService {
    /**
         * @param  {File} profilePic
         * @param {UserInterface}
         * @return {Promise<UserInterface>} edit profile user
         */
    editProfile(profilePic, user, userData, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = user.profilePic;
            if (profilePic) {
                url = yield this.uploadPhoto(profilePic, S3Constant_1.S3_DIRECTORY.userPics);
            }
            userData.avatar = url;
            userData.isCompleted = true;
            yield this.addUserToGroup(user);
            if (userData.isEmailChanged) {
                return {
                    user: yield this.changeEmailAndUpdateProfile(userData, user, next),
                    isEmailChanged: true
                };
            }
            else {
                user = yield UserModel_1.default.findByIdAndUpdate(user._id, userData, {
                    new: true
                });
                return {
                    user,
                    isEmailChanged: false
                };
            }
        });
    }
    addUserToGroup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user.groupId) {
                const group = yield GroupModel_1.default.findById(user.groupId);
                let memberExists = yield GroupMemberModel_1.default.exists({ group: user.groupId, member: user._id });
                if (!memberExists) {
                    const member = yield GroupMemberModel_1.default.create({
                        group: group._id,
                        member: user._id,
                        requestSentBy: group.createdBy,
                        groupRequestStatus: GroupMemberInterface_1.GroupRequestStatus.accepted,
                        groupCode: group.groupCode
                    });
                    yield GroupRequestService_1.default.handleRequestAccept(member, group, user, true);
                }
            }
            user.groupId = undefined;
            yield user.save();
            return true;
        });
    }
    /**
     *
     * @param profilePic
     * @param directory
     * @returns uploaded file absolute path
     */
    uploadPhoto(profilePic, directory) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = `${Date.now()}-${profilePic.originalFilename}`;
            return yield new FileUpload_1.FileUpload().uploadFileOnS3(profilePic, directory, fileName);
        });
    }
    /**
     *
     * @param userData
     * @param user
     * @returns user
     */
    changeEmailAndUpdateProfile(userData, user, next) {
        return __awaiter(this, void 0, void 0, function* () {
            userData.changedEmail = userData.email;
            delete userData.email;
            user = yield UserModel_1.default.findByIdAndUpdate(user._id, userData, {
                new: true
            });
            const emailVerificationToken = yield new Auth_1.Auth().getToken({
                id: user._id,
                role: 'VERIFY_EMAIL'
            }, '1d', next);
            const endPoint = '/root/verify-email?token=';
            const emailVerificationLink = yield AuthService_1.default.getDeepLink(endPoint, emailVerificationToken);
            console.log('Email verification link', emailVerificationLink);
            yield new Email_1.Email(user.changedEmail).sendVerificationEmail(emailVerificationLink);
            return user;
        });
    }
    verifyEmail(user, email, token, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = yield new Auth_1.Auth().decodeJwt(token);
            if (decoded.role !== 'VERIFY_EMAIL') {
                return ResponseHelper_1.default.badRequest(res, res.__('invalid_verification_token'));
            }
            const tokenCreatedTimeDiff = Math.floor(new Date().getTime() / 1000) - decoded.iat;
            if (tokenCreatedTimeDiff > 10 * 60) {
                return ResponseHelper_1.default.expired(res, res.__('verification_token_expired'));
            }
            user.email = email;
            user.isEmailVerified = true;
            user.isAccountActive = true;
            user.changedEmail = undefined;
            yield user.save();
            user.password = undefined;
            return {
                user
            };
        });
    }
    /**
     *
     * @param id
     * @param facebookProfileUrl
     * @param linkedinProfileUrl
     * @param twitterUsername
     * @param instagramUsername
     * @returns updated user
     */
    update(id, facebookProfileUrl, linkedinProfileUrl, twitterUsername, instagramUsername) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateUser = yield UserModel_1.default.findByIdAndUpdate(id, {
                facebookProfileUrl,
                linkedinProfileUrl,
                twitterUsername,
                instagramUsername,
                isCompleted: true
            }, {
                new: true
            });
            return updateUser;
        });
    }
    generateCustomerCode() {
        return __awaiter(this, void 0, void 0, function* () {
            let code = new Auth_1.Auth().generateVerificationCode(6);
            code = `WFU${code}`;
            const exist = yield UserModel_1.default.exists({ customerCode: code });
            if (exist) {
                code = yield this.generateCustomerCode();
            }
            return code;
        });
    }
}
exports.default = new UserService();
