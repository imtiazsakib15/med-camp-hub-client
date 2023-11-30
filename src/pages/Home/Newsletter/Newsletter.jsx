import Swal from "sweetalert2";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Newsletter = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    axiosPublic
      .post("/subscribe-newsletter", { email })
      .then(() => {
        Swal.fire({
          title: "Thank You for Subscribing Newsletter!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        event.target.reset();
      })
      .catch(() => {});
  };

  return (
    <SectionContainer>
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 mt-10 md:mt-0">
        Newsletter
      </h1>
      <div className="border max-w-2xl mx-auto rounded-lg shadow-sm text-center my-8 px-4 py-6">
        <p className="mt-1 text-sm sm:text-base">
          If you want to get notified, when we release a new medical camp,
          please subscribe our newsletter.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-5 sm:max-w-2xl sm:mx-auto mt-5"
        >
          <div className="flex-1 w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
              required
            />
          </div>
          <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border focus:ring-4 focus:ring-violet-300 border-transparent bg-violet-600 text-white hover:bg-violet-800">
            Subscribe
          </button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Newsletter;
