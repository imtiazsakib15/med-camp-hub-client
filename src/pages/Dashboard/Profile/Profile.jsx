import { Helmet } from "react-helmet-async";
import useUserRole from "../../../hooks/useUserRole";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import useUser from "../../../hooks/useUser";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Profile = () => {
  const { organizer, healthcare_professional, participant } = useUserRole();
  const { user, userRefetch } = useUser();
  const { updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [showmodal, setshowmodal] = useState(false);
  const onSubmit = (data) => {
    updateUserProfile(data?.name, data?.photoURL)
      .then(() => {
        const modifiedUser = {
          ...user,
          name: data?.name,
          photoURL: data?.photoURL,
        };
        axiosPublic.put(`/users/${user?.email}`, modifiedUser).then((res) => {
          if (res.data?.modifiedCount) {
            userRefetch();
            Swal.fire({
              title: "Profile Updated Successfully!",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setshowmodal(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {organizer
            ? "Organizer"
            : healthcare_professional
            ? "Health Care Professional"
            : participant
            ? "Participant"
            : ""}{" "}
          Profile | MedCamp Hub
        </title>
      </Helmet>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0 underline">
        Welcome, our valuable{" "}
        {organizer
          ? "Organizer"
          : healthcare_professional
          ? "Health Care Professional"
          : participant
          ? "Participant"
          : ""}
        !!!
      </h1>
      <div className="pt-6 text-center">
        <img
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto"
          src={user?.photoURL}
          alt="User Photo"
        />
        <h3 className="pt-5 text-xl sm:text-3xl font-bold">{user?.name}</h3>
        <h4 className="font-bold pt-2">{user?.email}</h4>
        <button
          onClick={() => setshowmodal(true)}
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 mt-8"
        >
          Update Profile
        </button>
        {showmodal && (
          <UpdateProfile onSubmit={onSubmit} setshowmodal={setshowmodal} />
        )}
      </div>
    </>
  );
};

export default Profile;
