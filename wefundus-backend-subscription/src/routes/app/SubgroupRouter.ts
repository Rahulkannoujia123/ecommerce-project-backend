import { Router } from "express";
import SubgroupController from "../../controllers/app/SubgroupController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import SubgroupValidator from "../../validators/app/SubgroupValidator";

class SubgroupRouter {
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
            SubgroupValidator.createSubgroup,
            SubgroupController.createSubgroup
        )
        this.router.post(
            '/add-member',
            AuthenticationMiddleware.user,
            SubgroupValidator.addMember,
            SubgroupController.addMember

        )
    }

    getRoutes() {
        this.router.get(
            '/list/:id',
            AuthenticationMiddleware.user,
            SubgroupController.subgroupList
        )
        this.router.get(
            '/user-subgroup',
            AuthenticationMiddleware.user,
            SubgroupController.userSubgroupList
        )
        this.router.get(
            '/details/:id',
            AuthenticationMiddleware.user,
            SubgroupController.subgroupDetails
        )
        this.router.get(
            '/member-list/:id',
            AuthenticationMiddleware.user,
            SubgroupController.memberList
        );

        this.router.get(
            '/group-member-list/:id',
            AuthenticationMiddleware.user,
            SubgroupController.groupMemberListToAddSubgroup
        );

    }

    patchRoutes() {
        this.router.patch(
            '/remove-member/:id',
            AuthenticationMiddleware.user,
            SubgroupValidator.removeMember,
            SubgroupController.removeMember
        )

        this.router.patch(
            '/edit/:id',
            AuthenticationMiddleware.user,
            FileUploadMiddleware.upload,
            SubgroupValidator.editSubgroup,
            SubgroupController.editSubgroup
        )
    }

    deleteRoutes() {
        this.router.delete(
            '/delete/:id',
            AuthenticationMiddleware.user,
            SubgroupController.deleteSubgroup
        )
    }
}

export default new SubgroupRouter().router;