import UserProfile from "views/publisher/UserProfile.js";
import AnnouncementsManagement from "views/publisher/AnnouncementsManagement.js";

var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    component: UserProfile,
    layout: "/publisher"
  },
  {
    path: "/announcements-management",
    name: "Announcement Management",
    component: AnnouncementsManagement,
    layout: "/publisher"
  }
];
export default routes;
