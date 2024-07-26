import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import PropTypes from 'prop-types';

Authroute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Authroute({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  // If user is authenticated, render children (allowed to access)
  // If not authenticated, redirect to login page with return URL
  return user ? (
    children
  ) : (
    <Navigate
      to={`/login?returnUrl=${location.pathname}`}
      replace
      state={{ from: location }}></Navigate>
    
  );
}
