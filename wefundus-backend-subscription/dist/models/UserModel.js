"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserInterface_1 = require("../interfaces/UserInterface");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    isEmailVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAccountActive: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        select: false
    },
    currentDeviceToken: {
        type: String,
    },
    avatar: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    displayName: {
        type: String,
    },
    accountNumber: {
        type: Number,
    },
    paypalEmail: {
        type: String,
    },
    description: {
        type: String,
    },
    facebookProfileUrl: {
        type: String,
    },
    linkedinProfileUrl: {
        type: String,
    },
    twitterUsername: {
        type: String,
    },
    instagramUsername: {
        type: String,
    },
    currentDeviceId: {
        type: String,
    },
    currentDeviceType: {
        type: String,
        enum: UserInterface_1.DeviceType
    },
    passwordChangedAt: {
        type: Date,
    },
    changedEmail: {
        type: String,
    },
    customerCode: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    /**
     * user is member of a group or user have a group request
     */
    groups: {
        type: [mongoose_1.Types.ObjectId],
        default: []
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    // use gor group invitation
    groupId: {
        type: mongoose_1.Types.ObjectId
    }
}, { timestamps: true });
userSchema.index({ email: 1 }, { unique: true });
const UserModel = (0, mongoose_1.model)('user', userSchema);
exports.default = UserModel;
