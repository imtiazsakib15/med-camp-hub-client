import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddACamp = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const campInfo = { ...data, organizer_email: user?.email };
    axiosSecure.post("/camps", campInfo).then((res) => {
      if (res.data?._id) {
        Swal.fire({
          title: "Camp Added Successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        reset();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Add a Camp | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0">
        Add a Camp
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="camp_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Camp Name
            </label>
            <input
              type="text"
              id="camp_name"
              {...register("camp_name", { required: "Camp name is required." })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.camp_name && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.camp_name?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Camp Image
            </label>
            <input
              type="text"
              id="image"
              {...register("image", { required: "Image is required." })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.image && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.image?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="starting_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Starting Date
            </label>
            <input
              type="date"
              id="starting_date"
              {...register("starting_date", {
                required: "Starting date is required.",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.starting_date && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.starting_date?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              {...register("time", { required: "Time is required." })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.time && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.time?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Location
            </label>
            <input
              type="url"
              id="location"
              {...register("location", { required: "Location is required." })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.location && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.location?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="fees"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Registration Fees
            </label>
            <input
              type="number"
              id="fees"
              {...register("fees", {
                required: "Registration fee is required.",
                min: {
                  value: 0,
                  message: "Registration fee can't be less than zero(0).",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.fees && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.fees?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="service_provided"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Specialized Service Provided
            </label>
            <input
              type="text"
              id="service_provided"
              {...register("service_provided", {
                required: "Specialized service is required.",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.service_provided && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.service_provided?.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <label
              htmlFor="healthcare_professionals"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Healthcare Professionals in Attendance
            </label>
            <input
              type="text"
              id="healthcare_professionals"
              {...register("healthcare_professionals", {
                required: "Healthcare professional is required.",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.healthcare_professionals && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.healthcare_professionals?.message}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="target_audience"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Target Audience
          </label>
          <input
            type="text"
            id="target_audience"
            {...register("target_audience", {
              required: "Target audience is required.",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          />
          <p>
            {errors.target_audience && (
              <span className="text-red-600 text-xs flex items-center gap-0.5">
                <MdErrorOutline />
                {errors.target_audience?.message}
              </span>
            )}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Comprehensive Description
          </label>
          <textarea
            id="description"
            rows="4"
            {...register("description", {
              required: "Description is required.",
            })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          <p>
            {errors.description && (
              <span className="text-red-600 text-xs flex items-center gap-0.5">
                <MdErrorOutline />
                {errors.description?.message}
              </span>
            )}
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Camp
        </button>
      </form>
    </>
  );
};

export default AddACamp;
