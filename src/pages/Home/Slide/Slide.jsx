import PropTypes from "prop-types";

const Slide = ({ slide }) => {
  return (
    <div className="md:flex md:gap-5 pb-8 px-10">
      <div className="md:w-1/2 flex flex-col justify-center pb-5 md:py-10 rounded-md">
        <h2 className="text-center md:text-left text-xl sm:text-3xl lg:text-4xl font-semibold">
          {slide.heading}
        </h2>
        <span className="text-gray-400 font-semibold mt-5 text-center md:text-left">
          {slide.sub_heading}
        </span>
      </div>
      <div className="md:w-1/2">
        <img
          className="w-full h-full object-cover rounded-md"
          src={slide.img}
          alt="slider-image"
        />
      </div>
    </div>
  );
};
Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
