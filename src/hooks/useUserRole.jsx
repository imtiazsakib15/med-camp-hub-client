import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  console.log(data?.role);
  return data;
};

export default useUserRole;
