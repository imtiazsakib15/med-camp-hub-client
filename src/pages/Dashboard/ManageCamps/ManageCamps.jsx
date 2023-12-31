import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import { useTable } from "react-table";
// import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import UpdateCamp from "../../Shared/UpdateCamp/UpdateCamp";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [showmodal, setshowmodal] = useState(false);
  const [updateCamp, setUpdateCamp] = useState(null);

  const { data: response, refetch } = useQuery({
    queryKey: ["myCamps", user?.email],
    queryFn: async () =>
      await axiosSecure.get(`/camps?organizer_email=${user?.email}`),
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
          .delete(`/camps/${id}`)
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

  //   const data = useMemo(() => response?.data || [], [response]);
  //   const columns = useMemo(
  //     () => [
  //       {
  //         Header: "Camp Name",
  //         accessor: "camp_name",
  //       },
  //       {
  //         Header: "Starting Date",
  //         accessor: "starting_date",
  //       },
  //       {
  //         Header: "Time(24 hour format)",
  //         accessor: "time",
  //       },
  //       {
  //         Header: "Location",
  //         accessor: "location",
  //       },
  //       {
  //         Header: "Update",
  //         cell: (
  //           <button className="bg-violet-800 p-4">
  //             <MdUpdate />
  //           </button>
  //         ),
  //       },
  //     ],
  //     []
  //   );
  //   console.log(data, columns);

  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     useTable({ columns, data });

  return (
    <>
      <Helmet>
        <title>Manage Camps | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0">
        Manage Camps
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
              <th className="rounded-tr-lg p-4">Delete</th>
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
                      <UpdateCamp
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <table className="text-left min-w-min overflow-x-scroll" {...getTableProps()}>
        <thead className="bg-violet-950 text-white">
          {headerGroups?.map((headerGroup, index) => (
            <tr key={index} {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <th className="p-3" key={index} {...column?.getHeaderProps()}>
                  {column?.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row?.getRowProps()}>
                {row?.cells?.map((cell, index) => (
                  <td className="p-3" key={index} {...cell?.getCellProps()}>
                    {" "}
                    {cell?.render("Cell")}{" "}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
};

export default ManageCamps;
