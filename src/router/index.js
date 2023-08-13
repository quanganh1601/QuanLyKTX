import { router } from "../config";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Manager from "../pages/manager";
import Account from "../pages/Account";
import LayoutRoom from "../pages/LayoutRoom";
import ManagerRoom from "../pages/managerRoom";
import ManagerStudent from "../pages/managerStudent";

export const publicRouter = [
  { path: router.home, component: Home },
  { path: router.login, component: Login },
  { path: router.register, component: Register },
  { path: router.manager, component: Manager },
  { path: router.layoutRoom, component: LayoutRoom },
  { path: router.account, component: Account },
  { path: router.managerRoom, component: ManagerRoom },
  { path: router.managerStudent, component: ManagerStudent }
]