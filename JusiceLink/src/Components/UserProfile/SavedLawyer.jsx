import PropTypes from "prop-types";
import img from "../../Assets/download.jpg";
import Rating from "../LawyerProfileDetail/Rating";
import { FaUser } from "react-icons/fa";

const lawyers = [
  { name: "Abebe Balcha", rating: 2 },
  { name: "Mulugeta Tesfaye", rating: 5 },
];

const Lawyer = ({ name, rating }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 mt-4 border border-gray-300 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105">
    <img
      src={img}
      className="rounded-full h-24 w-24 mb-4 sm:mb-0 sm:mr-4"
      alt="lawyer"
    />
    <div className="flex-1 flex flex-col">
      <h1 className="text-lg font-bold mb-2">{name}</h1>
      <Rating rate={rating} />
      <div className="mt-2">
        <button className="bg-blue-500 text-white flex justify-center items-center p-2 rounded hover:bg-blue-300 ml-auto">
          <FaUser className="mr-1" />
          View Profile
        </button>
      </div>
    </div>
  </div>
);

Lawyer.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default function SavedLawyer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lawyers.map((lawyer, index) => (
        <Lawyer key={index} name={lawyer.name} rating={lawyer.rating} />
      ))}
    </div>
  );
}
