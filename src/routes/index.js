import path from "../constants/path";
import Home from "../pages/Home";
import DefaultLayout from "../layouts/DefaultLayout";
import About from "../pages/About";
import NotFound from "../components/errors/NotFound";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";

const paths = [
  {
    path: path.home,
    component: Home,
  },
  {
    path: path.about,
    component: About,
    // cấu hình thêm protectedRoute như a Sơn dạy thì path nào cần bảo vệ cân thêm ProtectedRoute:true là ok
  },
  {
    path: path.notFound,
    component: NotFound,
  },
  {
    path: path.products,
    component: Products,
    layout: DefaultLayout,
  },
  {
    path: path.register,
    component: Register,
    layout: DefaultLayout,
  },
  { path: path.login, component: Login, layout: DefaultLayout },
  {
    path: path.products,
    component: DefaultLayout,
  },
];

export default paths;
