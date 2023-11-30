import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import Skeleton from "react-loading-skeleton";
import CampCard from "../../Shared/CampCard/CampCard";

const PopularCamps = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["allCamps"],
    queryFn: async () => await axiosPublic.get("/popular-camps"),
  });
  const camps = data?.data || [];
  console.log(camps);
  return (
    <>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 mt-10">
        Popular Items
      </h1>
      <SectionContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-8 md:pb-12">
          {isLoading && (
            <div>
              <Skeleton className="aspect-video mb-5" />
              <Skeleton count={4} />
            </div>
          )}
          {camps?.length > 0 &&
            camps.map((camp) => <CampCard camp={camp} key={camp._id} />)}
        </div>
      </SectionContainer>
    </>
  );
};

export default PopularCamps;
