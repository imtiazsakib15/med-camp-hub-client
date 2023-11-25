import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "../Slide/Slide";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";

const Slider = () => {
  const slides = [
    {
      img: "https://i.ibb.co/Cwvz3RH/banner-1-min.jpg",
      heading: "Empowering Thousands: A Legacy of Wellness and Satisfaction",
      sub_heading:
        "Join a community where the satisfaction of over a thousand individuals echoes through our medical camps. Explore success stories that illuminate our legacy of wellness and empowerment. ",
    },
    {
      img: "https://i.ibb.co/DWSQzKY/banner-2-min.jpg",
      heading: "Moments of Healing: A Chronicle of Impact",
      sub_heading:
        "Dive into the heartwarming narratives and impactful moments that define our medical camps. Your journey to wellness, compassion, and community impact starts now!",
    },
    {
      img: "https://i.ibb.co/zSkt6X6/banner-3-min.jpg",
      heading:
        "Capturing Moments of Compassion: Unveiling the Heartwarming Stories",
      sub_heading:
        "Embark on a visual odyssey as we unveil the success stories and impactful moments from our past medical camps. Your journey towards wellness and compassion begins here!",
    },
  ];

  return (
    <SectionContainer>
      <div className="my-8 -z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides?.map((slide) => (
            <SwiperSlide key={slide.img}>
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
};

export default Slider;
