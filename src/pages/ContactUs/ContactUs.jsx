import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import SectionContainer from "../Shared/SectionContainer/SectionContainer";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    Swal.fire({
      title: "Query Sent Successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MedCamp Hub</title>
      </Helmet>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-6 md:mt-10">
        Contact Us
      </h1>

      <SectionContainer>
        <form className="pb-10" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required.",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.name && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.name?.message}
                </span>
              )}
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="target_audience"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required.",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            />
            <p>
              {errors.email && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.email?.message}
                </span>
              )}
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="query"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Query
            </label>
            <textarea
              id="query"
              rows="4"
              {...register("query", {
                required: "Query is required.",
              })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <p>
              {errors.query && (
                <span className="text-red-600 text-xs flex items-center gap-0.5">
                  <MdErrorOutline />
                  {errors.query?.message}
                </span>
              )}
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </SectionContainer>
    </>
  );
};

export default ContactUs;
