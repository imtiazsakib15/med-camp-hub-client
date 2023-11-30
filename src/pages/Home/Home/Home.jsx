import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Newsletter from "../Newsletter/Newsletter";
import PopularCamps from "../PopularCamps/PopularCamps";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MedCamp Hub</title>
      </Helmet>
      <Slider />
      <PopularCamps />
      <Newsletter />
    </>
  );
};

export default Home;
