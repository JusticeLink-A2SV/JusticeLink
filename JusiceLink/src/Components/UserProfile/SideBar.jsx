import { useState, useLayoutEffect } from "react";
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
import NavBar from "../NavBar";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("dashboard");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setIsSmallScreen(window.innerWidth < 680);
      console.log(window.innerWidth);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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
        className={`bg-gray-400 min-h-screen border-y-black  text-white ${
          isSmallScreen && isOpen ? "w-12" : isOpen ? "w-64" : "w-20"
        } duration-300 `}
      >
        <button className="p-4 focus:outline-none" onClick={toggleSidebar}>
          {isOpen ? <FaTimes color="blue" /> : <FaBars color="blue" />}
        </button>
        <nav className="mt-10">
          <ul>
            <li className="mb-8">
              <img src={logo} />
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg cursor-pointer ${
                activeNavItem === "dashboard"
                  ? "bg-white shadow-lg text-blue-500"
                  : "hover:bg-white hover:shadow-lg hover:text-blue-500"
              }`}
              onClick={() => handleNavItemClick("dashboard")}
            >
              <FaTachometerAlt className="mr-2" color="blue" size={20} />
              {isOpen && (
                <span className={`${isSmallScreen ? "hidden" : "block"}`}>
                  Dashboard
                </span>
              )}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg cursor-pointer ${
                activeNavItem === "profile"
                  ? "bg-white shadow-lg text-blue-500"
                  : "hover:bg-white hover:shadow-lg hover:text-blue-500"
              }`}
              onClick={() => handleNavItemClick("profile")}
            >
              <FaUserCog className="mr-2" color="blue" size={20} />
              {isOpen && (
                <span className={`${isSmallScreen ? "hidden" : "block"}`}>
                  Profile Setting
                </span>
              )}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg cursor-pointer ${
                activeNavItem === "saved"
                  ? "bg-white shadow-lg text-blue-500"
                  : "hover:bg-white hover:shadow-lg hover:text-blue-500"
              }`}
              onClick={() => handleNavItemClick("saved")}
            >
              <FaBookmark className="mr-2" color="blue" size={20} />
              {isOpen && (
                <span className={`${isSmallScreen ? "hidden" : "block"}`}>
                  Saved
                </span>
              )}
            </li>
            <li
              className={`flex items-center p-2 hover:bg-white hover:shadow-lg cursor-pointer ${
                activeNavItem === "feedback"
                  ? "bg-white shadow-lg text-blue-500"
                  : "hover:bg-white hover:shadow-lg hover:text-blue-500"
              }`}
              onClick={() => handleNavItemClick("feedback")}
            >
              <FaCommentAlt className="mr-2" color="blue" size={20} />
              {isOpen && (
                <span className={`${isSmallScreen ? "hidden" : "block"}`}>
                  Feedback and Review
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-2 overflow-hidden">
        <NavBar />
        <div>{showContent()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
