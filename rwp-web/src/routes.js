import Product from "views/Product.js";
import AddProduct from "views/AddProduct";
import AddCategory from "views/AddCategory";

var routes = [
  {
    path: "/product",
    name: "Product",
    icon: "tim-icons icon-puzzle-10",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/addproduct",
    component: AddProduct,
    layout: "/admin",
    name: "Add Product",
    icon: "tim-icons icon-puzzle-10",
  }
];
export default routes;
