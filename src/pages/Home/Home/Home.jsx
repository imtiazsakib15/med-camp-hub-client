import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Newsletter from "../Newsletter/Newsletter";
import PopularCamps from "../PopularCamps/PopularCamps";
import AboutUs from "../AboutUs/AboutUs";
import ChatSupport from "../../Shared/ChatSupport/ChatSupport";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MedCamp Hub</title>
      </Helmet>
      <Slider />
      <AboutUs />
      <PopularCamps />
      <Testimonials />
      <Newsletter />
      <ChatSupport />
    </>
  );
};

export default Home;
