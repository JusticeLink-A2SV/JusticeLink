// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './components/Home';
import Home from "./pages/Home";
import LawyerProfile from "./Components/LawyerProfileDetail/LawyerProfile";
// // import LawyerProfile from "../src/Components/LawyerProfileDetail/LawyerProfile.jsx";
// // import User from "./Components/UserProfile/User";
// // function App() {
// //   return <User />;
// // }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lawyer" element={<LawyerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
