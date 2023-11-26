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
  const role = data?.role;
  const organizer = role === "Organizer";
  const healthcare_professional = role === "Healthcare Professional";
  const participant = role === "Participant";
  return { organizer, healthcare_professional, participant };
};

export default useUserRole;
