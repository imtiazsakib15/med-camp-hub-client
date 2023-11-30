import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
  const {
    _id,
    camp_name,
    image,
    fees,
    healthcare_professionals,
    service_provided,
    time,
    starting_date,
  } = camp;

  return (
    <div
      data-aos="flip-left"
      className="p-4 text-sm sm:text-base border rounded flex flex-col justify-between space-y-1.5"
    >
      <img
        className="rounded w-full aspect-video object-cover"
        src={image}
        alt="camp image"
      />

      <h3 className="font-bold sm:text-lg pt-3">{camp_name}</h3>
      <p>
        Starting Date: {starting_date} ({time})
      </p>
      <p>Specialized Service: {service_provided}</p>
      <p>Healthcare Professional: {healthcare_professionals}</p>
      <p>Registration Fees: ${fees}</p>
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
