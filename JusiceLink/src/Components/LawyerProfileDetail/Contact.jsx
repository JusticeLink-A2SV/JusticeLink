import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import data from "../../assets/dummy_data.json";

export default function Contact() {
  const { phone, email, address, website } = data;
  return (
    <div className="p-2 md:text-lg cursor-pointer">
      {phone && (
        <h3 className="flex m-2">
          <FaPhone color="blue" className="mr-2 mt-1" />
          {phone}
        </h3>
      )}
      {email && (
        <h3 className="flex  m-2">
          <FaEnvelope color="blue" className="mr-2 mt-1" />
          {email}
        </h3>
      )}
      {address && (
        <h3 className="flex m-2">
          <FaMapMarkerAlt color="blue" className="mr-2 mt-1" />
          {address}
        </h3>
      )}
      {website && (
        <h3 className="flex m-2">
          <FaGlobe color="blue" className="mr-2 mt-1" />
          {website}
        </h3>
      )}
    </div>
  );
}
