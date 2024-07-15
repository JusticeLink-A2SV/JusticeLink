import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((star, index) => {
        return (
          <FaStar
            key={index}
            color={index < props.rate ? "rgb(245, 227, 66)" : "gray"}
            size={20}
            className="transition-transform duration-300 transform hover:scale-125"
          />
        );
      })}
    </div>
  );
};
Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
