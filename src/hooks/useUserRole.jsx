import useUser from "./useUser";

const useUserRole = () => {
  const {user} = useUser();
  
  const role = user?.role;
  const organizer = role === "Organizer";
  const healthcare_professional = role === "Healthcare Professional";
  const participant = role === "Participant";
  return { organizer, healthcare_professional, participant };
};

export default useUserRole;
