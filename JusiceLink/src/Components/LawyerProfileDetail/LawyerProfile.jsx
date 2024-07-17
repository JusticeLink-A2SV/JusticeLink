import Fotter from "../Fotter";
import NavBar from "../NavBar";
import Profile from "./Profile";
import ProfileDetail from "./ProfileDetail";

export default function LawyerProfile() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center md:mt-10">
        <Profile className="mb-4 md:mb-0 md:mr-4" />{" "}
        <ProfileDetail className="md:ml-4" />
      </div>
      <Fotter />
    </>
  );
}
