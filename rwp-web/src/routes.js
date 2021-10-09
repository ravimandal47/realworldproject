import Dashboard from "views/Dashboard.js";
import Product from "views/Product.js";
import UserProfile from "views/UserProfile.js";
import AddProduct  from "views/AddProduct";
import Setting from "views/Setting";
import AddCategory from "views/AddCategory";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Product",
    icon: "tim-icons icon-puzzle-10",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "tim-icons icon-settings",
    component: Setting,
    layout: "/admin",
  },
  {
    path: "/addproduct",
    component: AddProduct,
    layout: "/admin",
  },
  
  {
    path: "/addcategory",
    component: AddCategory,
    layout: "/admin",
  },
];
export default routes;
