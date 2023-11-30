import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdErrorOutline } from "react-icons/md";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";

const RegisterCampModal = ({ camp, setshowmodal }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { _id, fees, address } = camp;

  const onSubmit = (data) => {
    const registerInfo = {
      ...data,
      email: user?.email,
      registered_camp_id: _id,
    };
    axiosSecure.post("/register-camps", registerInfo).then((res) => {
      if (res?.data?._id) {
        Swal.fire({
          title: "Camp Registered Successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      setshowmodal(false);
    });
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Join Camp
            </h3>
            <button
              onClick={() => setshowmodal(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
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
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  {...register("age", {
                    required: "Age is required.",
                    min: {
                      value: 0,
                      message: "Age can't be less than zero(0).",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                />
                <p>
                  {errors.age && (
                    <span className="text-red-600 text-xs flex items-center gap-0.5">
                      <MdErrorOutline />
                      {errors.age?.message}
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required.",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                />
                <p>
                  {errors.phone && (
                    <span className="text-red-600 text-xs flex items-center gap-0.5">
                      <MdErrorOutline />
                      {errors.phone?.message}
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium"
                >
                  Select gender
                </label>
                <select
                  id="gender"
                  {...register("gender", {
                    required: "Gender is required.",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                >
                  <option value="">Choose gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <p>
                  {errors.gender && (
                    <span className="text-red-600 text-xs flex items-center gap-0.5">
                      <MdErrorOutline />
                      {errors.gender?.message}
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
                  defaultValue={fees}
                  readOnly
                  className="read-only:bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
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
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                defaultValue={address}
                {...register("address", {
                  required: "Address is required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              />
              <p>
                {errors.address && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.address?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Health Related Information
              </label>
              <textarea
                id="health_info"
                rows="4"
                {...register("health_info", {
                  required: "Health related information is required.",
                })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p>
                {errors.health_info && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.health_info?.message}
                  </span>
                )}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

RegisterCampModal.propTypes = {
  camp: PropTypes.object,
  setshowmodal: PropTypes.func,
};

export default RegisterCampModal;
