"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRoutes_1 = require("./admin/AuthRoutes");
const CategoryRoutes_1 = require("./admin/CategoryRoutes");
const CategoryRouter_1 = require("./app/CategoryRouter");
const SubcategoryRoutes_1 = require("./admin/SubcategoryRoutes");
const SectionRoutes_1 = require("./admin/SectionRoutes");
const AuthRouter_1 = require("./app/AuthRouter");
const ProductRoutes_1 = require("./admin/ProductRoutes");
const ProductRouter_1 = require("./app/ProductRouter");
const BannerRoutes_1 = require("./admin/BannerRoutes");
const BannerRouter_1 = require("./app/BannerRouter");
const UserRouter_1 = require("./app/UserRouter");
const UserRoutes_1 = require("./admin/UserRoutes");
const WishlistRouter_1 = require("./app/WishlistRouter");
const BrandRoutes_1 = require("./admin/BrandRoutes");
const ReportReasonRoutes_1 = require("./admin/ReportReasonRoutes");
const CartRouter_1 = require("./app/CartRouter");
const ColorRoutes_1 = require("./admin/ColorRoutes");
const ReportReasonRouter_1 = require("./app/ReportReasonRouter");
const ProductReportsRouter_1 = require("./app/ProductReportsRouter");
const ProductReportRoutes_1 = require("./admin/ProductReportRoutes");
const FilterRouter_1 = require("./app/FilterRouter");
const FilterRoutes_1 = require("./admin/FilterRoutes");
const ReviewRouter_1 = require("./app/ReviewRouter");
const RecentSearchRouter_1 = require("./app/RecentSearchRouter");
const GroupRouter_1 = require("./app/GroupRouter");
const TestRouter_1 = require("./app/TestRouter");
const SubgroupRouter_1 = require("./app/SubgroupRouter");
const GroupRoutes_1 = require("./admin/GroupRoutes");
const SubgroupRoutes_1 = require("./admin/SubgroupRoutes");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.app();
        this.admin();
    }
    app() {
        this.router.use('/app/auth', AuthRouter_1.default);
        this.router.use('/app/category', CategoryRouter_1.default);
        this.router.use('/app/product', ProductRouter_1.default);
        this.router.use('/app/banner', BannerRouter_1.default);
        this.router.use('/app/user', UserRouter_1.default);
        this.router.use('/app/wishlist', WishlistRouter_1.default);
        this.router.use('/app/user', UserRouter_1.default);
        this.router.use('/app/cart', CartRouter_1.default);
        this.router.use('/app/report', ReportReasonRouter_1.default);
        this.router.use('/app/product-report', ProductReportsRouter_1.default);
        this.router.use('/app/filter', FilterRouter_1.default);
        this.router.use('/app/review', ReviewRouter_1.default);
        this.router.use('/app/recent-search', RecentSearchRouter_1.default);
        this.router.use('/app/group', GroupRouter_1.default);
        this.router.use('/app/subgroup', SubgroupRouter_1.default);
        this.router.use('/app/test', TestRouter_1.default);
    }
    admin() {
        this.router.use('/admin/auth', AuthRoutes_1.default);
        this.router.use('/admin/category', CategoryRoutes_1.default);
        this.router.use('/admin/subcategory', SubcategoryRoutes_1.default);
        this.router.use('/admin/section', SectionRoutes_1.default);
        this.router.use('/admin/product', ProductRoutes_1.default);
        this.router.use('/admin/product-reports', ProductReportRoutes_1.default);
        this.router.use('/admin/banner', BannerRoutes_1.default);
        this.router.use('/admin/user', UserRoutes_1.default);
        this.router.use('/admin/brand', BrandRoutes_1.default);
        this.router.use('/admin/user', UserRoutes_1.default);
        this.router.use('/admin/report-reason', ReportReasonRoutes_1.default);
        this.router.use('/admin/color', ColorRoutes_1.default);
        this.router.use('/admin/filter', FilterRoutes_1.default);
        this.router.use('/admin/group', GroupRoutes_1.default);
        this.router.use('/admin/subgroup', SubgroupRoutes_1.default);
    }
}
exports.default = new Routes().router;
