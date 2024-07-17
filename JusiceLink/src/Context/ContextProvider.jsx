import { createContext, useState } from "react";
import PropTypes from "prop-types";
const LawyerContext = createContext();

const LawyerProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    location: "location",
    practice: "practice",
  });
  return (
    <LawyerContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </LawyerContext.Provider>
  );
};

LawyerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LawyerContext, LawyerProvider };
