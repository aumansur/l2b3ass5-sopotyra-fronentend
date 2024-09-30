import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AboutPage from "../pages/About";

import BookingForm from "../pages/BookingForm/BookingForm";
import ContactPage from "../pages/Contact";
import FacilityDetailsPage from "../pages/FacilityDetailsPage/FacilityDetailsPage";
import FacilityList from "../pages/FacilityList/FacilityList";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";

import Register from "../pages/Register";

import Bookings from "../pages/users/Bookings/Bookings";
import DashboardHome from "../pages/users/Dashboard/DashboardHome";

export const userPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },

  {
    name: "",
    path: "facility/:facilityId",
    element: <FacilityDetailsPage />,
  },
  {
    name: "",
    path: "login",
    element: <Login />,
  },
  {
    name: "",
    path: "register",
    element: <Register />,
  },
  {
    name: "",
    path: "/dashboard",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
  {
    name: "",
    path: "bookingForm",
    element: <BookingForm />,
  },

  { name: "Facility List", path: "/offered", element: <FacilityList /> },
  // { name:'', path: "/pay", element: <Payment /> },
  { name: "Contact", path: "contact", element: <ContactPage /> },
  { name: "About", path: "about", element: <AboutPage /> },
];

export const authenticUserRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardHome />,
  },

  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
];
