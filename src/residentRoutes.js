import UserProfile from "views/resident/UserProfile.js";
import Announcements from "views/announcements/Announcements.js";

var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    component: UserProfile,
    layout: "/resident"
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: Announcements,
    layout: "/resident"
  }
];
export default routes;
