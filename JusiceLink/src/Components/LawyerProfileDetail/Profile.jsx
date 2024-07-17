import Rating from "./Rating";
import { MdCheckCircle } from "react-icons/md";
import { FaMapMarkerAlt, FaGlobe, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import data from "../../assets/dummy_data.json";

export default function Profile() {
  const lawyerData = data;
  if (!lawyerData) {
    return <div>Loading...</div>;
  }
  const {
    img,
    firstName,
    lastName,
    numberOfReview,
    location,
    experienceYears,
    stars,
    ourRating,
  } = lawyerData;

  return (
    <div className="m-6 p-5 shadow-lg md:w-1/2 lg:w-1/3 xl:w-1/4 h-fit">
      <div className="flex flex-col">
        <div className="flex items-center mb-4 flex-col md:flex-row md:items-start">
          <img
            src={img}
            className="w-32 h-36 rounded-lg mb-4 md:mr-4 md:mb-0 transition-transform duration-300 transform hover:scale-105"
            alt="Profile"
          />
          <div className="flex flex-col">
            <h3 className="text-3xl mb-2">
              {firstName}
              <br />
              {lastName}
            </h3>
            <div className="flex items-center flex-col md:flex-row">
              <div className="flex">
                <Rating rate={stars} />
                <p className="ml-0 mt-1 md:ml-2 md:mt-0 text-blue-600">
                  {numberOfReview ? numberOfReview : 0} Reviews
                </p>
              </div>
            </div>
            <p className="mt-2 text-lg text-blue-600">
              In app Rating: {ourRating ? ourRating : 0}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2" size={20} color="blue" />
            <h3>{location}</h3>
          </div>
          {experienceYears && (
            <div className="flex items-center mb-4">
              <MdCheckCircle className="mr-2" color="blue" size={20} />
              <h3>Licensed for {experienceYears} years</h3>
            </div>
          )}

          <button className="bg-yellow-500 text-white w-full flex items-center justify-center h-10 mb-4 hover:bg-yellow-400">
            <IoMdMail className="mr-2" />
            Message
          </button>

          <div className="flex">
            <button className="bg-blue-600 text-white w-1/2 mr-2 flex items-center justify-center h-10 hover:bg-blue-500">
              Website
              <FaGlobe className="ml-2" />
            </button>
            <button className="bg-blue-600 text-white w-1/2 ml-2 flex items-center justify-center h-10 hover:bg-blue-500">
              Phone
              <FaPhone className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
