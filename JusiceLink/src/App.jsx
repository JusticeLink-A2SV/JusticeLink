import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LawyerProfile from "./Components/LawyerProfileDetail/LawyerProfile";
import SearchList from "./pages/SearchList";
import User from "./Components/UserProfile/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lawyer" element={<SearchList />} />
        <Route path="/lawyerdetail" element={<LawyerProfile />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
