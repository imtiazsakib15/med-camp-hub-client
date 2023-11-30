import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import PropTypes from "prop-types";
import useUser from "../../../hooks/useUser";

const UpdateProfile = ({onSubmit, setshowmodal }) => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Profile
            </h3>
            <button
              onClick={() => {
                setshowmodal(false);
              }}
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
          <form
            className="p-5 text-left"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <input
                type="text"
                id="email"
                defaultValue={user?.email}
                readOnly
                className="read-only:bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              />
            </div>
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
                defaultValue={user?.name}
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
                htmlFor="photoURL"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                defaultValue={user?.photoURL}
                {...register("photoURL", {
                  required: "Photo URL is required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              />
              <p>
                {errors.photoURL && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.photoURL?.message}
                  </span>
                )}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateProfile.propTypes = {
  onSubmit: PropTypes.func,
  setshowmodal: PropTypes.func,
};

export default UpdateProfile;
