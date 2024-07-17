// import lawyer from "../assets/lawyer.jpg";
import { MdMessage } from "react-icons/md";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Rating from "./LawyerProfileDetail/Rating";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LawyerSearch(props) {
  const lawyerData = props.data;
  return (
    <div
      className="flex w-2/3 mx-auto mt-8 
      bg-gray-300 p-3
      rounded-lg"
    >
      <div className="bg-white w-1/4 mr-4 border rounded-lg border-gray-500 flex flex-col">
        <Link to="/lawyerdetail">
          <img
            src={lawyerData.img}
            className="w-52 h-36 mx-auto p-2 rounded-xl"
          />
        </Link>
        <h2 className="font-bold text-lg mx-auto mb-2">{lawyerData.name}</h2>
        <button className="bg-blue-500 text-white font-bold w-2/5 p-2 rounded-lg mx-auto mb-2">
          {lawyerData.tag}
        </button>
        <button className="flex items-center justify-center bg-gray-300 text-blue-500 font-bold w-2/5 p-2 rounded-lg mx-auto mb-2">
          <MdMessage className="mr-2" color="blue" />
          Message
        </button>
        <h2 className="flex items-center ml-2 mt-2 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          {lawyerData.location}
        </h2>
        <h2 className="flex items-center ml-2 mt-2 mb-2">
          <FaPhone className="mr-2" />
          {lawyerData.phone}
        </h2>
        <h2 className="flex items-center ml-2 mt-2 mb-2">
          <FaEnvelope className="mr-2" />
          {lawyerData.email}
        </h2>
      </div>
      <div className="flex flex-col w-3/4 ">
        <div className="bg-gray-100 mt-2 mb-5 rounded-lg p-8 h-5/6">
          <h1 className="text-xl font-bold text-blue-500">About</h1>
          <div className="bg-white p-2 mt-1">
            <p className="text-justify">{lawyerData.bio}</p>
          </div>
        </div>
        <div className="bg-gray-100 mb-3 h-5/6 p-4 rounded-lg">
          <h2>License Active since {lawyerData.license}</h2>
          <div className="flex flex-wrap">
            <h1>Practice Areas:</h1>
            {lawyerData.practiceAreas.map((data, idx) => {
              return (
                <h2 key={idx} className="flex items-center justify-center p-2">
                  <FaCheck color="blue" className="mr-2" />
                  {data.area} {data.percent}
                </h2>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h2 className="flex mt-2 gap-2">
              In app Rating:{" "}
              {<Rating rate={lawyerData.inAppRating} className="" />}
            </h2>
            <h2 className="flex mt-2 gap-2">
              Review: {<Rating rate={lawyerData.review} />}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
LawyerSearch.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    license: PropTypes.number.isRequired,
    practiceAreas: PropTypes.arrayOf(
      PropTypes.shape({
        area: PropTypes.string.isRequired,
        percent: PropTypes.string.isRequired,
      })
    ).isRequired,
    inAppRating: PropTypes.number.isRequired,
    review: PropTypes.number.isRequired,
  }).isRequired,
};
