import { router } from "../config";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRouter = [
  { path: router.home, component: Home },
  { path: router.login, component: Login },
  { path: router.register, component: Register }
]