import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionContainer from "../Shared/SectionContainer/SectionContainer";
import Skeleton from "react-loading-skeleton";

const CampDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["allCamps"],
    queryFn: async () => await axiosSecure.get(`/camps/${id}`),
  });
  const camp = data?.data || {};
  const {
    _id,
    camp_name,
    image,
    fees,
    healthcare_professionals,
    service_provided,
    time,
    starting_date,
    description,
    target_audience,
  } = camp;

  return (
    <>
      <Helmet>
        <title>Camp Details | MedCamp Hub</title>
      </Helmet>
      <SectionContainer>
        <div className="pb-20 space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-5 sm:mt-8 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            {camp_name || <Skeleton className="h-14" />}
          </h1>
          <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto pt-4">
            {image ? (
              <img className="w-full" src={image} alt="" />
            ) : (
              <Skeleton className="h-56" />
            )}
          </div>
          {data ? (
            <>
              <h4 className="sm:text-lg font-medium pt-8">
                Specialized Service: {service_provided}
              </h4>
              <p className="sm:text-lg font-medium">
                Healthcare Professional: {healthcare_professionals}
              </p>
              <p>Target Audience: {target_audience}</p>
              <p>Starting Date: {starting_date}</p>
              <p>Time: {time} (24 hour format)</p>
              <p className="font-medium">Registration Fee: ${fees}</p>
              <p className="text-gray-800 pb-6">{description}</p>
              <button className="bg-violet-600 hover:bg-violet-800 text-white md:text-lg font-medium rounded-lg px-8 py-2.5">
                Join Camp
              </button>
            </>
          ) : (
            <Skeleton className="mt-4" count={10} />
          )}
        </div>
      </SectionContainer>
    </>
  );
};

export default CampDetails;
