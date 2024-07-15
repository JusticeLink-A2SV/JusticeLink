import { IoIosHourglass } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { LawyerContext } from "../../Context/ContextProvider";
import { useContext } from "react";
import { IoMdMail } from "react-icons/io";

export default function Cost() {
  const { cost } = useContext(LawyerContext);

  return (
    <div className="p-3">
      {cost && (
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <h2 className="font-bold mb-2 sm:mb-0">Rates</h2>
          <h2 className="font-bold mb-2 sm:mb-0">Payment Methods</h2>
        </div>
      )}
      {cost &&
        cost.map((c, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between mb-2"
            >
              <p className="flex items-center mb-2 sm:mb-0">
                <IoIosHourglass color="blue" size={20} />
                <span className="mx-2">{c.rate}</span>
              </p>
              <p className="flex items-center">
                <FaCreditCard color="blue" size={20} />
                <span className="mx-2">{c.payment}</span>
              </p>
            </div>
          );
        })}
      <div>
        <button className="bg-yellow-500 rounded text-white text-lg p-2 mt-4 flex justify-center align-middle">
          <IoMdMail className="mr-2 mt-1" />
          Contact for details
        </button>
      </div>
    </div>
  );
}
