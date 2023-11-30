import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import UpdateUpcomingCamp from "../../Shared/UpdateUpcomingCamp/UpdateUpcomingCamp";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [showmodal, setshowmodal] = useState(false);
  const [updateCamp, setUpdateCamp] = useState(null);

  const { data: response, refetch } = useQuery({
    queryKey: ["myUpcomingCamps", user?.email],
    queryFn: async () =>
      await axiosSecure.get(`/upcoming-camps?organizer_email=${user?.email}`),
  });
  const allCamps = response?.data || [];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/upcoming-camps/${id}`)
          .then((response) => {
            if (response?.data?._id) {
              refetch();
              Swal.fire({
                title: "Camp Deleted Successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          })
          .catch(() => {});
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Manage Upcoming Camps | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0">
        Manage Upcoming Camps
      </h1>
      <div className="overflow-x-auto pt-8">
        <table className="table-auto">
          <thead>
            <tr className="text-left bg-violet-600 text-white">
              <th className="p-4 rounded-tl-lg">#</th>
              <th className="p-4">Camp Name</th>
              <th className="p-4">Starting Date</th>
              <th className="p-4">
                Time <small>(24 hour format)</small>
              </th>
              <th className="p-4">Location</th>
              <th className="p-4">Update</th>
              <th className="p-4">Delete</th>
              <th className="rounded-tr-lg p-4">Action</th>
            </tr>
          </thead>
          <tbody className="bg-slate-100">
            {allCamps?.map((camp, index) => (
              <tr key={camp._id}>
                <td className="font-semibold p-4">{index + 1}</td>
                <td className="p-4 font-semibold hover:underline">
                  <Link to={`/camp-details/${camp._id}`}>{camp.camp_name}</Link>
                </td>
                <td className="p-4">{camp.starting_date}</td>
                <td className="p-4">{camp.time}</td>
                <td className="p-4">{camp.location}</td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      setUpdateCamp(camp);
                      setshowmodal(true);
                    }}
                    className="p-2 bg-violet-600 hover:bg-violet-800 text-white text-xl rounded"
                  >
                    <MdEdit />
                  </button>
                  {updateCamp && (
                    <div className={`${showmodal ? "block" : "hidden"}`}>
                      <UpdateUpcomingCamp
                        camp={updateCamp}
                        setUpdateCamp={setUpdateCamp}
                        setshowmodal={setshowmodal}
                        refetch={refetch}
                      />
                    </div>
                  )}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDelete(camp._id)}
                    className="bg-red-600 hover:bg-red-800 text-white text-xl p-2 rounded"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
                <td className="p-4">
                  <button className="bg-green-500 hover:bg-green-800 text-white text-xl px-4 py-2 rounded">
                    Publish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCamps;
