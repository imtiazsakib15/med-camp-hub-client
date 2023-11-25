import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | MedCamp Hub</title>
      </Helmet>
      <Slider />
    </>
  );
};

export default Home;
