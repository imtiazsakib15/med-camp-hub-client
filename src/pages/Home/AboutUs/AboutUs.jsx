import aboutUs from "../../../assets/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 flex items-center flex-col-reverse lg:flex-row gap-12 my-20 overflow-hidden">
      <div className="lg:w-1/2" data-aos="fade-right">
        <img
          className="rounded-md max-h-[550px] w-full"
          src={aboutUs}
          alt="About Us"
        />
      </div>
      <div className="lg:w-1/2 space-y-5" data-aos="fade-left">
        <h2 className="text-xl sm:text-3xl font-bold text-center lg:text-left">
          About Us
        </h2>
        <p>
          Welcome to <span className="font-bold">MedCamp Hub</span>, your
          trusted source for information about medical camps and health-related
          events. Our mission is to bridge the gap between healthcare providers
          and the communities they serve, making it easier for individuals to
          access vital medical services.
        </p>
        <h4 className="text-lg sm:text-2xl font-bold  text-center lg:text-left">
          Our Mission
        </h4>
        <p>
          At <span className="font-bold">MedCamp Hub</span>, we believe in the
          power of community and the importance of accessible healthcare. Our
          mission is to:
        </p>
        <ul className="list-disc list-inside">
          <li>Facilitate Information Flow</li>
          <li>Empower Communities</li>
          <li>Support Healthcare Providers</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
