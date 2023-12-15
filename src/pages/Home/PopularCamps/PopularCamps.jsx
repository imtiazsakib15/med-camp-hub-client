import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import Skeleton from "react-loading-skeleton";
import CampCard from "../../Shared/CampCard/CampCard";
import { Link } from "react-router-dom";

const PopularCamps = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["allCamps"],
    queryFn: async () => await axiosPublic.get("/popular-camps"),
  });
  const camps = data?.data || [];

  return (
    <>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 mt-10">
        Popular Camps
      </h1>
      <SectionContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6 md:pb-8">
          {isLoading && (
            <div>
              <Skeleton className="aspect-video mb-5" />
              <Skeleton count={4} />
            </div>
          )}
          {camps?.length > 0 &&
            camps.map((camp) => <CampCard camp={camp} key={camp._id} />)}
        </div>
        <div className="text-center pb-4">
          <Link
            to="/available-camps"
            className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            Available Camps
          </Link>
        </div>
      </SectionContainer>
    </>
  );
};

export default PopularCamps;
