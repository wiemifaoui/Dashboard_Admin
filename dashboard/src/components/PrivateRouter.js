import React from "react";
import { Navigate } from "react-router-dom";
//hedhy bech kif l utilisateur mahouch connectee  lezm ya3ml login
const PrivateRouter = ({ user, children }) => {
  if (!user.isConnected) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRouter;
