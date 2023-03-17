import Dashboard from "views/admin/Dashboard.js";
import UserManagement from "views/admin/userManagement/UserManagement.js";
import AppointmentAndFeedback from "views/admin/AppointmentAndFeedback.js";
import Announcements from "views/announcements/Announcements.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: Announcements,
    layout: "/admin"
  },
  {
    path: "/user-management",
    name: "User Management",
    component: UserManagement,
    layout: "/admin"
  },
  {
    path: "/appointment-and-feedback",
    name: "Appointment & Feedback",
    component: AppointmentAndFeedback,
    layout: "/admin"
  }
];
export default routes;
