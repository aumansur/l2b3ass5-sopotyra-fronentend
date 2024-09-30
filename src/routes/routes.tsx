import { createBrowserRouter } from "react-router-dom";

import { routeGenerator } from "../utils/routeGenerator";
import { authenticUserRoutes, userPaths } from "./route.user";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

import { adminPath } from "./route.admin";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import NotFoundPage from "../pages/NotFound";
import UnauthorizedPage from "../pages/UnAuthorized";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role={"user"}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(authenticUserRoutes),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={"admin"}>
        {" "}
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPath),
  },
  {
    path: "*", // Catch-all route for 404 pages
    element: <NotFoundPage />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
]);

export default router;
