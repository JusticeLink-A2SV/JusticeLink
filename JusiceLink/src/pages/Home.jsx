import { useContext } from "react";
import NavBar from "../Components/NavBar";
import bg from "../assets/homePageImage.png";
import PracticeBox from "../Components/PracticeBox";
import Fotter from "../Components/Fotter";
import { LawyerContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { searchData, setSearchData } = useContext(LawyerContext);
  const handleLocationChange = (e) => {
    setSearchData((prev) => ({ ...prev, location: e.target.value }));
  };

  const handlePracticeChange = (e) => {
    setSearchData((prev) => ({ ...prev, practice: e.target.value }));
  };
  return (
    <div className="h-screen relative">
      <img className="h-[100%] absolute right-0 -z-[1]" src={bg} />
      <NavBar />
      <div className="flex justify-center items-center h-[40%]">
        <div className="w-[85%] bg-slate700">
          <div className="">
            <p className="text-7xl">
              Connect with the best <br />
              attorneys.
            </p>
            <p className="text-3xl text-blue-700">
              The best attorneys in a single click away.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-[85%] flex ">
          <form className="flex p-8  shadow-2xl">
            <input
              className="h-12 border-2 border-gray-900 pl-10 focus:outline-none pr-4"
              type="text"
              placeholder="location"
              value={searchData.location}
              onChange={handleLocationChange}
            />
            <input
              className="h-12 border-2 border-l-0 border-gray-900 pl-4 focus:outline-none"
              type="text"
              placeholder="practice"
              value={searchData.practice}
              onChange={handlePracticeChange}
            />
            <Link to="/lawyer">
              <button
                className="bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4 h-12"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
      <section className="flex justify-center items-center mt-40">
        <div className="w-[85%] ">
          <p className="text-5xl text-center m-40">
            FIND A LAWYER BY PRACTICE AREA
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-18 md:gap-20 lg:gap-24">
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
            <PracticeBox />
          </div>
        </div>
      </section>
      <Fotter />
    </div>
  );
};

export default Home;
