// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className="flex justify-center">
      <section className=" flex justify-between h-[130px] items-center w-[85%] align-middle">
        <img className=" w-[150px] inline" src={logo} />
        <div className="flex">
          <ul className="flex gap-10 pr-14 items-center">
            <li className="">
              <Link to="/lawyer">By Location</Link>
            </li>
            <li className="">By Practice</li>
            <li className="">Pro Bono</li>
            <li className="">Blogs</li>
          </ul>
          <button className=" bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4">
            sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
