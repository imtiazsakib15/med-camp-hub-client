import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import useUserRole from "../hooks/useUserRole";

const OrganizerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { organizer, isUserLoading } = useUserRole();

  if (loading || isUserLoading)
    return (
      <div className="h-screen grid place-items-center">
        <RotatingLines
          strokeColor="violet"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );

  if (user?.email && organizer) return children;

  return <Navigate to={"/error"} />;
};

OrganizerRoute.propTypes = {
  children: PropTypes.node,
};

export default OrganizerRoute;
