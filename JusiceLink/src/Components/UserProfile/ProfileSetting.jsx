import user from "../../Assets/user.png";
import {
  FaUser,
  FaLanguage,
  FaPhone,
  FaCreditCard,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ProfileSetting() {
  return (
    <div className="flex h-fit mt-10 flex-col">
      <h1 className="text-2xl text-center font-bold">Welcome, Bezawit</h1>
      <div className=" p-6 text-center flex justify-around">
        <div className="flex items-center border border-blue-500 p-2 rounded-lg">
          <img src={user} alt="User" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Bezawit Assefa</h2>
            <h3 className="text-sm text-gray-600 text-start">Client</h3>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-3 rounded mt-4 hover:bg-blue-700">
          Edit Information
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full p-10">
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaUser color="blue" size={20} className="mt-1 mr-2" />
            Full Name
          </h2>
          <h3 className="ml-6 mt-2">Bezawit Assefa</h3>
        </div>
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaLanguage color="blue" size={20} className="mt-1 mr-2" />
            Language
          </h2>
          <h3 className="ml-6 mt-2">Amharic</h3>
        </div>
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaPhone color="blue" size={20} className="mt-1 mr-2" />
            Phone
          </h2>
          <h3 className="ml-6 mt-2">+251972837508</h3>
        </div>
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaCreditCard color="blue" size={20} className="mt-1 mr-2" />
            Payment info
          </h2>
          <h3 className="ml-6 mt-2">Free Plan</h3>
        </div>
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaEnvelope color="blue" size={20} className="mt-1 mr-2" />
            Email Address
          </h2>
          <h3 className="ml-6 mt-2">BezawitAssefa@gmail.com</h3>
        </div>
        <div className="bg-white p-4 flex flex-col shadow-lg">
          <h2 className="flex">
            <FaMapMarkerAlt color="blue" size={20} className="mt-1 mr-2" />
            Location{" "}
          </h2>
          <h3 className="ml-6 mt-2">Addis Ababa</h3>
        </div>
      </div>
      <div className="p-2 mt-5">
        <button className="bg-gray-300 p-4 ml-8 text-blue-500 font-bold border border-blue-500 rounded-lg">
          Accessibility Setting
        </button>
      </div>
    </div>
  );
}
