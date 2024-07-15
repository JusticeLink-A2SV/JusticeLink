import { useState } from "react";
import Nav from "../../Components/LawyerProfileDetail/Nav";
import {
  FaTachometerAlt,
  FaBars,
  FaTimes,
  FaUserCog,
  FaBookmark,
  FaCommentAlt,
} from "react-icons/fa";
import logo from "../../Assets/logo.png";
import UserDashboard from "./UserDashboard";
import ProfileSetting from "./ProfileSetting";
import Saved from "./Saved";
import FeedbackAndReview from "./FeedbackAndReview";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };
  const showContent = () => {
    if (activeNavItem === "dashboard") {
      return <UserDashboard />;
    } else if (activeNavItem === "profile") {
      return <ProfileSetting />;
    } else if (activeNavItem === "saved") {
      return <Saved />;
    } else {
      return <FeedbackAndReview />;
    }
  };
  return (
    <div className="flex ">
      <div
        className={`bg-blue-500 border-y-black h-auto text-white ${
          isOpen ? "w-64" : "w-20"
        } duration-300 `}
      >
        <button className="p-4 focus:outline-none" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="mt-10">
          <ul>
            <li>
              <img src={logo} />
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer ${
                activeNavItem === "dashboard"
                  ? "bg-white shadow-lg text-black"
                  : "hover:bg-white hover:shadow-lg hover:text-black"
              }`}
              onClick={() => handleNavItemClick("dashboard")}
            >
              <FaTachometerAlt className="mr-2" />
              {isOpen && <span>Dashboard</span>}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer ${
                activeNavItem === "profile"
                  ? "bg-white shadow-lg text-black"
                  : "hover:bg-white hover:shadow-lg hover:text-black"
              }`}
              onClick={() => handleNavItemClick("profile")}
            >
              <FaUserCog className="mr-2" />
              {isOpen && <span>Profile Setting</span>}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer ${
                activeNavItem === "saved"
                  ? "bg-white shadow-lg text-black"
                  : "hover:bg-white hover:shadow-lg hover:text-black"
              }`}
              onClick={() => handleNavItemClick("saved")}
            >
              <FaBookmark className="mr-2" />
              {isOpen && <span>Saved</span>}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer ${
                activeNavItem === "feedback"
                  ? "bg-white shadow-lg text-black"
                  : "hover:bg-white hover:shadow-lg hover:text-black"
              }`}
              onClick={() => handleNavItemClick("feedback")}
            >
              <FaCommentAlt className="mr-2" />
              {isOpen && <span>Feedback and Review</span>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-2">
        <Nav />
        <div>{showContent()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
