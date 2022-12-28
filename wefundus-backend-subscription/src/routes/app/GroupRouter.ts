import { Router } from 'express';
import GroupController from '../../controllers/app/GroupController';
import GroupFavouriteController from '../../controllers/app/GroupFavouriteController';
import GroupInviteController from '../../controllers/app/GroupInviteController';
import GroupRequestController from '../../controllers/app/GroupRequestController';
import AuthenticationMiddleware from '../../middlewares/AuthenticationMiddleware';
import FileUploadMiddleware from '../../middlewares/FileUploadMiddleware';
import GroupValidator from '../../validators/app/GroupValidator';

class GroupRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.getRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    postRoutes() {
        this.router.post(
            '/create',
            AuthenticationMiddleware.user,
            FileUploadMiddleware.upload,
            GroupValidator.createGroup,
            GroupController.createGroup
        );

        this.router.post(
            '/add-member',
            AuthenticationMiddleware.user,
            GroupValidator.addMember,
            GroupRequestController.addMember
        );
        
        this.router.post(
            '/mark-as-favourite',
            AuthenticationMiddleware.user,
            GroupValidator.addToFavourite,
            GroupFavouriteController.addToFavourite
        );

        this.router.post(
            '/join',
            AuthenticationMiddleware.user,
            GroupValidator.join,
            GroupController.joinGroup
        );

        this.router.post(
            '/invite-members',
            AuthenticationMiddleware.user,
            GroupValidator.inviteMember,
            GroupInviteController.inviteMember
        );
    }

    getRoutes() {
        this.router.get(
            '/list',
            AuthenticationMiddleware.user,
            GroupController.groupList
        )
        this.router.get(
            '/details/:id',
            AuthenticationMiddleware.user,
            GroupController.groupDetails
        )

        this.router.get(
            '/group-purpose/list',
            AuthenticationMiddleware.user,
            GroupController.groupPurpose
        )

        this.router.get(
            '/member-list/:id',
            AuthenticationMiddleware.user,
            GroupController.groupMemberList
        );

        this.router.get(
            '/user-list/:id',
            AuthenticationMiddleware.user,
            GroupRequestController.userList
        );

        this.router.get(
            '/request-list',
            AuthenticationMiddleware.user,
            GroupRequestController.requestList
        );

        this.router.get(
            '/search',
            // AuthenticationMiddleware.user,
            GroupController.searchGroup
        );

        this.router.get(
            '/all-list',
            AuthenticationMiddleware.user,
            GroupController.allGroupList
        )

        this.router.get(
            '/search-suggestions',
            // AuthenticationMiddleware.user,
            GroupController.searchSuggestions
        );

        this.router.get(
            '/top-cashback-groups',
            // AuthenticationMiddleware.user,
            GroupController.topCashBackGroups
        );

        this.router.get(
            '/featured-groups',
            // AuthenticationMiddleware.user,
            GroupController.featuredGroup
        );

        this.router.get(
            '/favourite-group',
            AuthenticationMiddleware.user,
            GroupFavouriteController.favouriteGroupList
        )

    }

    patchRoutes() {
        this.router.patch(
            '/edit/:id',
            AuthenticationMiddleware.user,
            FileUploadMiddleware.upload,
            GroupValidator.editGroup,
            GroupController.editGroup
        );

        this.router.patch(
            '/request-action/:id',
            AuthenticationMiddleware.user,
            GroupValidator.groupRequestAction,
            GroupRequestController.groupRequestAction
        );

        this.router.patch(
            '/remove-member/:id',
            AuthenticationMiddleware.user,
            GroupValidator.removeMember,
            GroupController.removeGroupMember
        );
    }

    deleteRoutes() {
        this.router.delete(
            '/delete/:id',
            AuthenticationMiddleware.user,
            GroupController.deleteGroup
        )

        this.router.delete(
            '/leave/:id',
            AuthenticationMiddleware.user,
            GroupController.leaveGroup
        )

        this.router.delete(
            '/remove-from-favourite/:id',
            AuthenticationMiddleware.user,
            GroupFavouriteController.RemoveFromFavourite
        )
    }
}

export default new GroupRouter().router