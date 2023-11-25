import { Helmet } from "react-helmet-async";
import { MdErrorOutline } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // createUser(data?.email, data?.password).then((userCredential) => {
    //   updateUserProfile(data?.name, data?.photoURL)
    //     .then(() => {
    //       axiosPublic.post("/users", userInfo).then((res) => {
    //         if (res.data?._id) {

    //           navigate("/");
    //         }
    //       });
    // })
    signIn(data?.email, data?.password)
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: `Log In Successfully!`,
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // });
  };

  return (
    <>
      <Helmet>
        <title>Log In | MedCamp Hub</title>
      </Helmet>

      <div className="bg-gray-100 flex h-full items-center pb-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl md:text-4xl font-bold text-gray-800">
                  Log In Now!
                </h1>
              </div>

              <div className="mt-5 sm:mt-6">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-y-4">
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

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-sm text-gray-600">
                  Don&apos;t have an account?
                  <Link
                    className="text-violet-600 decoration-2 hover:underline font-medium "
                    to="/register"
                  >
                    Register here
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

export default Login;
