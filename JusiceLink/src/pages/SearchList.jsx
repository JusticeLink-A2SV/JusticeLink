import Fotter from "../Components/Fotter";
import NavBar from "../Components/NavBar";
import SearchFiled from "../Components/SearchFiled";

const SearchList = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <SearchFiled />
      </div>
      <Fotter />
    </>
  );
};

export default SearchList;
