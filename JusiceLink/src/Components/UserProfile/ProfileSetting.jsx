import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import defaultUserImage from "../../assets/user.png";

import {
  FaUser,
  FaLanguage,
  FaPhone,
  FaCreditCard,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ProfileSetting() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Eyerusalem Bezu",
    language: "Amharic",
    phone: "+251972837508",
    paymentInfo: "Free Plan",
    email: "bezueyerusalem@gmail.com",
    location: "Addis Ababa",
  });
  const [image, setImage] = useState(defaultUserImage);
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex h-full mt-10 flex-col items-center px-4 md:px-8 lg:px-16 mb-20">
      <h1 className="text-2xl text-center font-bold mb-4">
        Welcome, {profile.fullName.split(" ")[0]}!
      </h1>
      <div className="p-6 text-center flex flex-col md:flex-row justify-around items-center w-full">
        <div className="flex items-center border border-blue-500 p-2 rounded-lg mb-4 md:mb-0">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden p-2 cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src={image}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <div>
            <h2 className="text-lg font-semibold">{profile.fullName}</h2>
            <h3 className="text-sm text-gray-600 text-start">Client</h3>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-3 rounded mt-4 hover:bg-blue-700 h-11"
          onClick={handleEditClick}
        >
          {isEditing ? "Save Changes" : "Edit Information"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4 md:p-10">
        <EditableField
          icon={<FaUser color="blue" size={20} className="mr-2" />}
          label="Full Name"
          value={profile.fullName}
          name="fullName"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <EditableField
          icon={<FaLanguage color="blue" size={20} className="mr-2" />}
          label="Language"
          value={profile.language}
          name="language"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <EditableField
          icon={<FaPhone color="blue" size={20} className="mr-2" />}
          label="Phone"
          value={profile.phone}
          name="phone"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <EditableField
          icon={<FaCreditCard color="blue" size={20} className="mr-2" />}
          label="Payment info"
          value={profile.paymentInfo}
          name="paymentInfo"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <EditableField
          icon={<FaEnvelope color="blue" size={20} className="mr-2" />}
          label="Email Address"
          value={profile.email}
          name="email"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
        <EditableField
          icon={<FaMapMarkerAlt color="blue" size={20} className="mr-2" />}
          label="Location"
          value={profile.location}
          name="location"
          isEditing={isEditing}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between w-full">
        <button
          className="bg-blue-200 text-blue-500 font-bold rounded-lg p-2 h-fit ml-10 border border-blue-500"
          onClick={handleCancelClick}
        >
          Accessibility Settings
        </button>
        {isEditing && (
          <div className="flex w-full md:w-auto h-fit">
            <button
              className="bg-blue-500 p-4 text-white rounded-lg flex justify-center items-center mr-8"
              onClick={handleCancelClick}
            >
              <FaTimes /> Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const EditableField = ({ icon, label, value, name, isEditing, onChange }) => {
  return (
    <div className="bg-white p-4 flex flex-col shadow-lg">
      <h2 className="flex font-semibold">
        {icon}
        {label}
      </h2>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="ml-6 mt-2 border border-gray-300 p-2 rounded outline-none"
        />
      ) : (
        <h3 className="ml-6 mt-2">{value}</h3>
      )}
    </div>
  );
};

EditableField.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
