import { Link } from "react-router-dom";
import practiceImage from "../assets/practiceImage.png";

const PracticeBox = () => {
  return (
    <div className="bg-white shadow-2xl w-[250px] h-[250px] flex flex-col justify-center items-center relative">
      <img
        className="rounded-full w-[80px] absolute -top-10"
        src={practiceImage}
        alt="Practice Image"
      />
      <Link to="/lawyer">
        <p className="text-3xl p-5">Family</p>
        <ul className="flex flex-col justify-center items-center">
          <li>Divorce</li>
          <li>Child Custody</li>
          <li>Child Support</li>
        </ul>
      </Link>
    </div>
  );
};

export default PracticeBox;
