import React from "react";

const Fotter = () => {
  return (
    <footer className=" bg-blue-700 flex justify-center items-center mt-40 h-[50%]">
      <div>
        <p className=" text-2xl text-white text-center">About us</p>
        <div className=" flex gap-20 p-5">
          <div className="flex flex-col bg-blue-900 shadow-2xl w-[300px] p-5   items-center">
            <p className=" text-white text-xl p-4">conatct</p>
            <ul className="flex flex-col justify-center pl-5 text-white">
              <li>(480) 555-0103</li>
              <li>michael.mitc@example.com</li>
              <li>8502 Preston Rd. Inglewood, Maine 98380</li>
              <li>IBM</li>
            </ul>
          </div>
          <div className="flex flex-col bg-blue-900 shadow-2xl w-[300px] p-5   items-center">
            <p className=" text-white text-xl p-4">conatct</p>
            <ul className="flex flex-col justify-center pl-5 text-white">
              <li>(480) 555-0103</li>
              <li>michael.mitc@example.com</li>
              <li>8502 Preston Rd. Inglewood, Maine 98380</li>
              <li>IBM</li>
            </ul>
          </div>
          <div className="flex flex-col bg-blue-900 shadow-2xl w-[300px] p-5   items-center">
            <p className=" text-white text-xl p-4">conatct</p>
            <ul className="flex flex-col justify-center pl-5 text-white">
              <li>(480) 555-0103</li>
              <li>michael.mitc@example.com</li>
              <li>8502 Preston Rd. Inglewood, Maine 98380</li>
              <li>IBM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
