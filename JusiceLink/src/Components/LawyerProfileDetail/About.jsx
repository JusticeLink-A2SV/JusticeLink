import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LawyerContext } from "../../Context/ContextProvider";
import { useContext } from "react";
import PracticeChart from "./Chart";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  const { bio, education, practiceAreas } = useContext(LawyerContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      {bio && (
        <>
          <h1 className="text-lg font-bold mb-2">About the lawyer</h1>
          <p className="text-justify">
            {isExpanded
              ? bio
              : bio.length > maxLength
              ? `${bio.substring(0, maxLength)}...`
              : bio}
          </p>
          {bio.length > maxLength && (
            <p
              className="flex justify-end mt-3 text-blue-600 font-semibold cursor-pointer"
              onClick={toggleExpand}
            >
              {isExpanded ? (
                <>
                  Read Less <IoIosArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read More <IoIosArrowDown className="mt-1" />
                </>
              )}
            </p>
          )}
        </>
      )}

      {education && education.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Education</h3>
          {education.map((ed, idx) => (
            <p key={idx} className="flex p-2 items-center">
              <FaGraduationCap
                color="blue"
                className="mr-2 transition-transform duration-300 transform hover:scale-125"
              />
              {ed}
            </p>
          ))}
        </div>
      )}

      {practiceAreas && (
        <div>
          <h2 className="font-semibold mt-4">Practice Area</h2>
          <PracticeChart />
        </div>
      )}

      <div>
        <h1 className="font-semibold text-lg text-blue-600 underline hover:text-blue-500 cursor-pointer mt-4">
          View Licence
        </h1>
      </div>
    </div>
  );
};

export default About;
