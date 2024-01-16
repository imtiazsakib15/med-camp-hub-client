import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import ReactStars from "react-stars";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      rating: 4,
      details: "Innovative idea!!! Thank you for helping to patients.",
      name: "John Doe",
    },
    {
      _id: 2,
      rating: 5,
      details: "Wow, Thank you for creating these.",
      name: "Sakib",
    },
    {
      _id: 3,
      rating: 4,
      details: "Great idea for helping to patients.",
      name: "Imtiaz Ahmed",
    },
  ];

  return (
    <div>
      <SectionContainer>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 mt-10">
          Testimonials
        </h1>
        <div className="shadow-lg border rounded-md">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.length > 0 &&
              reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="text-center my-5 md:my-10">
                    <FaQuoteLeft className="mx-auto text-3xl sm:text-4xl lg:text-5xl text-violet-600" />
                    <ReactStars
                      className="mx-auto w-max"
                      count={5}
                      value={review.rating}
                      edit={false}
                      size={32}
                      color2={"#ffbb00"}
                    />
                    <p className="text-sm sm:text-base px-10 sm:px-12 md:px-16 pt-5">
                      {review.details}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-medium text-violet-600 pt-2">
                      {review.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Testimonials;
