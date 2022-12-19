import React from "react";
import { useRoutes } from "react-router-dom";
import user from "./user";

const RouteRegister: React.FC = () => {
  const _user = useRoutes(user);
  return _user;
};

export default RouteRegister;
