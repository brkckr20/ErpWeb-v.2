import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const Protected: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...routeProps
}) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect to="/giris" />; // Sayfayı "/giris" URL'sine yönlendir
  }

  return <Route {...routeProps} render={(props) => <Component {...props} />} />;
};

export default Protected;
