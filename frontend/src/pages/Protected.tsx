import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useAppSelector } from "../contexts/store";

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const Protected: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...routeProps
}) => {
  const { token, user } = useAppSelector((state) => state.auth);
  const isAuthenticated = token && user;

  if (!isAuthenticated) {
    return <Redirect to="/giris" />; // Sayfayı "/giris" URL'sine yönlendir
  }

  return <Route {...routeProps} render={(props) => <Component {...props} />} />;
};

export default Protected;
