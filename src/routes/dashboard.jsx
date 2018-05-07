import Dashboard from "views/Dashboard/Dashboard";
import TableList from "views/TableList/TableList";
import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
 {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList
  },
 {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
 { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
