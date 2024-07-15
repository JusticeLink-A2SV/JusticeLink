import { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Review from "./Review";
import Cost from "./Cost";

const ProfileDetail = () => {
  const btnChoices = ["About", "Contact", "Reviews", "Cost"];
  const [activeButton, setActiveButton] = useState(btnChoices[0]);
  const [resize, setResize] = useState(window.innerWidth < 768);

  function changeContent(content) {
    setActiveButton(content);
  }

  const showContent = () => {
    switch (activeButton) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Reviews":
        return <Review />;
      case "Cost":
        return <Cost />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (resize) {
    return (
      <div className="shadow-lg my-6 w-full">
        <div className="p-6">
          <div className="flex flex-col">
            {btnChoices.map((content, idx) => (
              <div key={idx} className="mb-2">
                <button
                  className={`flex justify-between w-full bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mb-2 ${
                    activeButton === content
                      ? "bg-white text-black shadow-lg"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => changeContent(content)}
                >
                  <span>{content}</span>
                  <span>{activeButton === content ? "-" : "+"}</span>
                </button>
                {activeButton === content && (
                  <div className="border border-gray-300 p-4">
                    {showContent()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-lg my-6 w-full md:w-2/5">
      <div className="p-6">
        <div className="flex flex-wrap mb-4">
          {btnChoices.map((content, idx) => (
            <button
              key={idx}
              className={`bg-blue-500 hover:bg-blue-700 font-bold py-2  mb-2 md:w-1/4 w-full ${
                activeButton === content
                  ? "bg-white text-black shadow-lg"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => changeContent(content)}
            >
              {content}
            </button>
          ))}
        </div>
        <div className="border border-gray-300 p-4">{showContent()}</div>
      </div>
    </div>
  );
};

export default ProfileDetail;
