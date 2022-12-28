import { Router } from "express";
import AuthRoutes from "./admin/AuthRoutes";
import CategoryRoutes from "./admin/CategoryRoutes";
import CategoryRouter from "./app/CategoryRouter";
import SubcategoryRoutes from "./admin/SubcategoryRoutes";
import SectionRoutes from "./admin/SectionRoutes";
import AuthRouter from "./app/AuthRouter";
import ProductRoutes from "./admin/ProductRoutes";
import ProductRouter from "./app/ProductRouter";
import BannerRoutes from "./admin/BannerRoutes";
import BannerRouter from "./app/BannerRouter";
import UserRouter from "./app/UserRouter";
import UserRoutes from "./admin/UserRoutes";
import WishlistRouter from "./app/WishlistRouter";
import BrandRoutes from "./admin/BrandRoutes";
import ReportReasonRoutes from "./admin/ReportReasonRoutes";
import CartRouter from "./app/CartRouter";
import ColorRoutes from "./admin/ColorRoutes";
import ReportReasonRouter from "./app/ReportReasonRouter";
import ProductReportsRouter from "./app/ProductReportsRouter";
import ProductReportRoutes from "./admin/ProductReportRoutes";
import FilterRouter from "./app/FilterRouter";
import FilterRoutes from "./admin/FilterRoutes";
import ReviewRouter from "./app/ReviewRouter";
import RecentSearchRouter from "./app/RecentSearchRouter";
import GroupRouter from "./app/GroupRouter";
import TestRouter from "./app/TestRouter";
import SubgroupRouter from "./app/SubgroupRouter";
import GroupRoutes from "./admin/GroupRoutes";
import SubgroupRoutes from "./admin/SubgroupRoutes";
import SubscriptionRoutes from "./admin/SubscriptionRoutes";
class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
    this.admin();
  }

  app() {
    this.router.use('/app/auth', AuthRouter);
    this.router.use('/app/category', CategoryRouter);
    this.router.use('/app/product', ProductRouter);
    this.router.use('/app/banner', BannerRouter);
    this.router.use('/app/user', UserRouter);
    this.router.use('/app/wishlist', WishlistRouter)
    this.router.use('/app/user', UserRouter);
    this.router.use('/app/cart', CartRouter);
    this.router.use('/app/report', ReportReasonRouter);
    this.router.use('/app/product-report', ProductReportsRouter);
    this.router.use('/app/filter', FilterRouter);
    this.router.use('/app/review', ReviewRouter);
    this.router.use('/app/recent-search',RecentSearchRouter)
    this.router.use('/app/group',GroupRouter);
    this.router.use('/app/subgroup',SubgroupRouter);
    this.router.use('/app/test',TestRouter);
  }

  admin() {
    this.router.use('/admin/auth', AuthRoutes);
    this.router.use('/admin/category', CategoryRoutes);
    this.router.use('/admin/subcategory', SubcategoryRoutes);
    this.router.use('/admin/section', SectionRoutes);
    this.router.use('/admin/product', ProductRoutes);
    this.router.use('/admin/product-reports', ProductReportRoutes)
    this.router.use('/admin/banner', BannerRoutes);
    this.router.use('/admin/user', UserRoutes)
    this.router.use('/admin/brand', BrandRoutes);
    this.router.use('/admin/user', UserRoutes);
    this.router.use('/admin/report-reason', ReportReasonRoutes);
    this.router.use('/admin/color', ColorRoutes);
    this.router.use('/admin/filter', FilterRoutes);
    this.router.use('/admin/group', GroupRoutes);
    this.router.use('/admin/subgroup', SubgroupRoutes)
    this.router.use('/admin/subscription',SubscriptionRoutes)
  }

}
export default new Routes().router;