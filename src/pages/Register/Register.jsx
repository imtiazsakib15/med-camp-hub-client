import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((userCredential) => {
      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          const userInfo = {
            email: userCredential.user.email,
            name: userCredential.user.displayName,
            role: data?.role,
            photoURL: data?.photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data?._id) {
              Swal.fire({
                title: "Good job!",
                text: `Register Successfully!`,
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
      userCredential.user.displayName = data?.name;
      userCredential.user.photoURL = data?.photoURL;
    });
  };

  return (
    <>
      <Helmet>
        <title>Register | MedCamp Hub</title>
      </Helmet>

      <div className="bg-gray-100 flex h-full items-center pb-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl md:text-4xl font-bold text-gray-800">
                  Register Now!
                </h1>
              </div>

              <div className="mt-5 sm:mt-6">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required." })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
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
                    <div>
                      <label
                        htmlFor="photoURL"
                        className="block text-sm font-medium mb-2"
                      >
                        Photo URL*
                      </label>
                      <input
                        type="text"
                        id="photoURL"
                        {...register("photoURL", {
                          required: "Photo URL is required.",
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
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
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
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
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-2"
                      >
                        Password*
                      </label>
                      <input
                        type="password"
                        id="password"
                        {...register("password", {
                          required: "Password is required.",
                          minLength: {
                            value: 6,
                            message:
                              "Password should have at least 6 characters.",
                          },
                          maxLength: {
                            value: 32,
                            message:
                              "Password should contain less than 32 characters.",
                          },
                          pattern: {
                            value:
                              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%#^&(){}*`.:;<>,?~_+=|-])/,
                            message:
                              "Password should have at least one small letter, one capital letter, one number, and one special character.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
                      />
                      <p>
                        {errors.password && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.password?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium"
                      >
                        Select a role*
                      </label>
                      <select
                        id="role"
                        {...register("role", {
                          required: "Role is required.",
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                      >
                        <option value="">Choose a role</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Healthcare Professional">
                          Healthcare Professional
                        </option>
                        <option value="Participant">Participant</option>
                      </select>
                      <p>
                        {errors.role && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.role?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div>
                      <div className="flex gap-1.5 pb-1">
                        <input
                          id="toc"
                          {...register("toc", {
                            required: "Please accept our terms and conditions.",
                          })}
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-violet-600  focus:ring-violet-500"
                        />
                        <label htmlFor="toc" className="text-sm font-medium">
                          I accept the{" "}
                          <Link
                            className="text-violet-600 decoration-2 hover:underline font-medium"
                            to=""
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                      <p>
                        {errors.toc && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.toc?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?
                  <Link
                    className="text-violet-600 decoration-2 hover:underline font-medium "
                    to="/login"
                  >
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
