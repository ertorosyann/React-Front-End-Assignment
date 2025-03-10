import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const CheckToken = ({ element }: { element: JSX.Element }) => {
  const { isAuthentificated } = useAuth();

  if (!isAuthentificated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};
