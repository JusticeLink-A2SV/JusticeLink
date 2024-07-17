import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import img from "../assets/img.jpg";

const NavBar = () => {
  const { user, login } = useContext(AuthContext);
  const userData = {
    firstName: "Eyerusalem",
    lastName: "Bezu",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  return (
    <div className="flex justify-center">
      <section className=" flex justify-between h-[130px] items-center w-[85%] align-middle">
        <img className=" w-[150px] inline" src={logo} />
        <div className="flex">
          <ul className="flex gap-10 pr-14 items-center">
            <li className="">
              <Link to="/lawyer">By Location</Link>
            </li>
            <li className="">
              <Link to="/lawyer">By Practice</Link>
            </li>
            <li className="">
              <Link to="/lawyer">Pro Bono</Link>
            </li>
            <li className="">
              <Link to="/lawyer">Blogs</Link>
            </li>
          </ul>
          {user ? (
            <Link to="/profile">
              <div className="rounded-full">
                <img src={img} className="w-12 h-12 rounded-full" />
              </div>
            </Link>
          ) : (
            <button
              className="bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4 "
              onClick={() => login(userData)}
            >
              Sign up
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default NavBar;
