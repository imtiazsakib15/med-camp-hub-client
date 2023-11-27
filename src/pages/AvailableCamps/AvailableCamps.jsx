import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SectionContainer from "../Shared/SectionContainer/SectionContainer";
import CampCard from "../Shared/CampCard/CampCard";

const AvailableCamps = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data } = useQuery({
    queryKey: ["allCamps"],
    queryFn: async () => await axiosSecure.get(`/camps`),
  });
  const allCamps = data?.data || [];

  return (
    <>
      <Helmet>
        <title>Available Camps | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-5 sm:mt-8">
        Available Camps
      </h1>
      <SectionContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-8 md:pb-12">
          {isLoading && (
            <div>
              <Skeleton className="aspect-video mb-5" />
              <Skeleton count={4} />
            </div>
          )}
          {allCamps?.length > 0 &&
            allCamps.map((camp) => <CampCard camp={camp} key={camp._id} />)}
        </div>
      </SectionContainer>
    </>
  );
};

export default AvailableCamps;
