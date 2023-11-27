import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg text-white text-center"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </>
  );
};

export default PrivateRoute;
