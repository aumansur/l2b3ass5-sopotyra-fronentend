import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, selectCurrentToken } from "../../redux/feature/auth/authSlice";
import { VerifyToken } from "../../utils/VerifyToken";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  role?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();
  let user = null;

  // Verify token if it exists
  if (token) {
    user = VerifyToken(token);
  }

  if (user) {
    // Check user role if needed
    if (role && role !== user.role) {
      dispatch(logOut()); // Logout the user if they don't have the required role
      return <Navigate to="/unauthorized" replace />;
    }

    // User is authenticated and has the correct role
    return <>{children}</>;
  }

  // User is not authenticated
  dispatch(logOut()); // Log out the user
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
