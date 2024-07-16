import React from "react";

const SearchFiled = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[85%] flex ">
        <form className="flex p-8  shadow-2xl">
          <input
            className="h-12 border-2 border-gray-900 pl-10 focus:outline-none pr-4"
            type="text"
            placeholder="location"
          />
          <input
            className="h-12 border-2 border-l-0 border-gray-900 pl-4 focus:outline-none"
            type="text"
            placeholder="practice"
          />
          <button className="bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFiled;
