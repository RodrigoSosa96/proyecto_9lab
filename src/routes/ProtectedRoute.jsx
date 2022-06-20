import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from "react";
import SessionContext from "../context/session/SessionContext";

const ProtectedRoute = ({ redirectPath = '/', children }) => {
  const { isAdmin } = useContext(SessionContext)
  if (!isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};


export default ProtectedRoute