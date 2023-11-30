import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Newsletter from "../Newsletter/Newsletter";
import PopularCamps from "../PopularCamps/PopularCamps";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MedCamp Hub</title>
      </Helmet>
      <Slider />
      <AboutUs />
      <PopularCamps />
      <Newsletter />
    </>
  );
};

export default Home;
