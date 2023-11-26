import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const MyDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Dashboard | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-center font-bold text-xl sm:text-3xl lg:text-4xl max-w-lg sm:px-14 mx-auto py-10 sm:py-14 lg:py-20">
        Hello, Welcome {user?.displayName || "Back"}!!!
      </h1>
    </>
  );
};

export default MyDashboard;
