import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold w-52">
          <img alt="logo" src={logo} className="w-11  h-full" />
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
