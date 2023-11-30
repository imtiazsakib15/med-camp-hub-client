import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return { user: data, userRefetch: refetch, isUserLoading:isLoading };
};

export default useUser;
