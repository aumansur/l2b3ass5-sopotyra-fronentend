import Bookings from "../pages/admin/FacilityManagement/Bookings";
import CreateAdmin from "../pages/admin/FacilityManagement/CreateAdmin";
import CreateFacility from "../pages/admin/FacilityManagement/CreateFacility";
import Facility from "../pages/admin/FacilityManagement/Facility";
import DashboardHome from "../pages/users/Dashboard/DashboardHome";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardHome />,
  },
  {
    name: "Create-Facility",
    path: "create-facility",
    element: <CreateFacility />,
  },
  {
    name: "Facility",
    path: "facility",
    element: <Facility />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
