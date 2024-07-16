import { createContext } from "react";
import PropTypes from "prop-types";
import data from "../../src/assets/dummy_data.json";

const LawyerContext = createContext();

const LawyerProvider = ({ children }) => {
  return (
    <LawyerContext.Provider value={data}>{children}</LawyerContext.Provider>
  );
};

LawyerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LawyerContext, LawyerProvider };
