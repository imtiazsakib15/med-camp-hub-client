import PropTypes from "prop-types";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const CampCard = ({ camp }) => {
  const {
    _id,
    camp_name,
    image,
    fees,
    healthcare_professionals,
    service_provided,
  } = camp;

  return (
    <div
      data-aos="flip-left"
      className="p-4 text-sm sm:text-base border rounded flex flex-col justify-between space-y-1.5"
    >
      <PhotoView src={image}>
        <img
          className="rounded w-full aspect-video object-cover cursor-pointer"
          src={image}
          alt="camp image"
        />
      </PhotoView>

      <div className="flex justify-between items-center">
        <h3 className="font-bold sm:text-lg pt-3">{camp_name}</h3>
        <p className="font-bold">${fees}</p>
      </div>
      <p>Specialized Service: {service_provided}</p>
      <p>Healthcare Professional: {healthcare_professionals}</p>

      <Link
        to={`/camp-details/${_id}`}
        className="bg-violet-600 hover:bg-violet-800 text-white font-bold px-5 py-2 w-max"
      >
        View More
      </Link>
    </div>
  );
};
CampCard.propTypes = {
  camp: PropTypes.object,
};

export default CampCard;
