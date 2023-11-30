import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MedCamp Hub</title>
      </Helmet>
      <Slider />
      <Newsletter />
    </>
  );
};

export default Home;
