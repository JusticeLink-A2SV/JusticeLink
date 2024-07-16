import { useState, useLayoutEffect } from "react";
import img from "../../Assets/justice.jpg";
import { FaCalendarAlt, FaBell } from "react-icons/fa";

export default function UserDashboard() {
  const [showNewCaseOverlay, setShowNewCaseOverlay] = useState(false);
  const [cases, setCases] = useState([]);
  const [newCaseDescription, setNewCaseDescription] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setIsSmallScreen(window.innerWidth < 680);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleStartNewCase = () => {
    setShowNewCaseOverlay(true);
  };

  const handleCloseNewCaseOverlay = () => {
    setShowNewCaseOverlay(false);
    setNewCaseDescription("");
  };

  const handleSaveNewCase = () => {
    if (newCaseDescription.trim()) {
      setCases([...cases, newCaseDescription]);
      setNewCaseDescription("");
      setShowNewCaseOverlay(false);
    }
  };

  const handleSeeAllCases = () => {
    setShowNewCaseOverlay(false);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-10 flex justify-around">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <h4 className="text-gray-300">Free Membership User</h4>
        </div>
        <div>
          <button
            className="border border-blue-500 text-blue-500 p-2 rounded font-bold"
            onClick={handleStartNewCase}
          >
            Start new case
          </button>
        </div>
      </div>

      {showNewCaseOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">New Case Details</h2>
            <textarea
              className="w-full h-32 bg-gray-100 border border-gray-300 rounded-lg p-3 resize-none outline-none mb-4"
              placeholder="Write small description here..."
              value={newCaseDescription}
              onChange={(e) => setNewCaseDescription(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleSaveNewCase}
                disabled={!newCaseDescription.trim()}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={handleCloseNewCaseOverlay}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-col md:flex-row justify-center">
        <div className="shadow-lg w-full md:w-1/3 m-2 h-80 rounded-md">
          <img src={img} alt="Justice" className="w-full h-full rounded-md" />
        </div>
        <div className="shadow-lg w-full md:w-1/3 m-2 h-80 rounded-xl p-5">
          <div className="flex items-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-bold text-3xl">
              {cases.length}
            </div>
            <div>
              <h3 className="font-semibold text-xl ml-3 md:ml-2">
                Active Cases
              </h3>
            </div>
          </div>
          <div className="mt-2">
            {cases.length > 0 ? (
              <ul className="text-sm text-blue-500">
                {cases.map((caseItem, index) => (
                  <li key={index} className="mt-1 text-lg">
                    {index + 1}. {caseItem}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-300">No active cases.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex p-8 rounded-xl justify-around bg-blue-500 w-full mx-auto items-center md:w-2/3">
        <div className="flex items-center">
          <FaCalendarAlt color="white" size={30} />
          <h2 className="text-white ml-2">No upcoming appointments</h2>
        </div>
        <div
          className="flex items-center ml-4 md:ml-0"
          onClick={handleSeeAllCases}
        >
          <FaBell color="white" size={20} />
          <h3 className="text-white ml-2 cursor-pointer">
            See all notifications
          </h3>
        </div>
      </div>

      <div className="mt-8 mb-8 flex justify-center">
        {cases.length > 0 && (
          <button
            className="border border-blue-500 text-blue-500 p-2 rounded font-bold"
            onClick={handleSeeAllCases}
          >
            See all cases
          </button>
        )}
      </div>
    </div>
  );
}
