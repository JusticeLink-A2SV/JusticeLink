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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`bg-blue-500 border-y-black text-white ${
          isOpen ? "w-64" : "w-20"
        } duration-300 h-screen`}
      >
        <button className="p-4 focus:outline-none" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="mt-10">
          <ul>
            <li>
              <img src={logo} />
            </li>
            <li className="flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer">
              <FaTachometerAlt className="mr-2" />
              {isOpen && <span>Dashboard</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer">
              <FaUserCog className="mr-2" />
              {isOpen && <span>Profile Setting</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer">
              <FaBookmark className="mr-2" />
              {isOpen && <span>Saved</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-white hover:shadow-lg hover:text-black cursor-pointer">
              <FaCommentAlt className="mr-2" />
              {isOpen && <span>Feedback and Review</span>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <Nav />
        <h1 className="text-2xl font-bold">Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
