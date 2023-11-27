import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CampDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data } = useQuery({
      queryKey: ["allCamps"],
      queryFn: async () => await axiosSecure.get(`/camps/${id}`),
    });
    // const allCamps = data?.data || [];
    console.log(data);
  
    return (
        <div>
            
        </div>
    );
};

export default CampDetails;