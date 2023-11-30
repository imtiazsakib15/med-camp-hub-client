import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import useUserRole from "../hooks/useUserRole";

const ParticipantRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { participant, isUserLoading } = useUserRole();

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

  if (user?.email && participant) return children;

  return <Navigate to={"/error"} />;
};

ParticipantRoute.propTypes = {
  children: PropTypes.node,
};

export default ParticipantRoute;
