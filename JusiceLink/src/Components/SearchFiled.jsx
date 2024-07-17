import { useState, useContext } from "react";
import { LawyerContext } from "../Context/ContextProvider";
import LawyerSearch from "../Components/LawyerSearch";
import lawyerList from "../assets/lawyerData.js";

const SearchFiled = () => {
  const { searchData, setSearchData } = useContext(LawyerContext);
  const [filteredLawyers, setFilteredLawyers] = useState(lawyerList);

  const filterData = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Filter function called");

    const results = lawyerList.filter((lawyer) => {
      const matchesLocation = lawyer.location
        .toLowerCase()
        .includes(searchData.location.toLowerCase());
      const matchesPractice = lawyer.practice
        .toLowerCase()
        .includes(searchData.practice.toLowerCase());
      return matchesLocation || matchesPractice;
    });

    console.log("Filtered Lawyers: ", results);
    setFilteredLawyers(results);
  };

  const handleLocationChange = (e) => {
    setSearchData((prev) => ({ ...prev, location: e.target.value }));
  };

  const handlePracticeChange = (e) => {
    setSearchData((prev) => ({ ...prev, practice: e.target.value }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8 mt-8">
        <form className="flex p-8 shadow-2xl" onSubmit={filterData}>
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
          <button
            className="bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map((data, idx) => (
            <LawyerSearch data={data} key={idx} />
          ))
        ) : (
          <p>No lawyers found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFiled;
