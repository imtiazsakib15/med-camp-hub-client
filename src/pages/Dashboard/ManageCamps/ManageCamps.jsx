// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useTable } from "react-table";
// import { useMemo } from "react";
// import { Helmet } from "react-helmet-async";
// import { MdUpdate } from "react-icons/md";

const ManageCamps = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();

//   const {
//     isLoading,
//     error,
//     data: response,
//   } = useQuery({
//     queryKey: ["myCamps"],
//     queryFn: async () =>
//       await axiosSecure.get(`/camps?organizer_email=${user?.email}`),
//   });
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

//   return (
//     <>
//       <Helmet>
//         <title>Manage Camps | MedCamp Hub</title>
//       </Helmet>
//       <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0">
//         Manage Camps
//       </h1>
//       <table className="text-left overflow-x-scroll" {...getTableProps()}>
//         <thead className="bg-violet-950 text-white">
//           {headerGroups?.map((headerGroup, index) => (
//             <tr key={index} {...headerGroup?.getHeaderGroupProps()}>
//               {headerGroup?.headers?.map((column) => (
//                 <th className="p-3" key={index} {...column?.getHeaderProps()}>
//                   {column?.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows?.map((row, index) => {
//             prepareRow(row);
//             return (
//               <tr key={index} {...row?.getRowProps()}>
//                 {row?.cells?.map((cell, index) => (
//                   <td className="p-3" key={index} {...cell?.getCellProps()}>
//                     {" "}
//                     {cell?.render("Cell")}{" "}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
};

export default ManageCamps;
