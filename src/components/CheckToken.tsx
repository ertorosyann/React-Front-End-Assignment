import { Navigate, Outlet } from "react-router-dom";

const CheckToken: React.FC = () => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default CheckToken;
