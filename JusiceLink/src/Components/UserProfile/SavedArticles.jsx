import PropTypes from "prop-types";
import Rating from "../LawyerProfileDetail/Rating";
import { IoMdArrowForward } from "react-icons/io";

const articles = [
  {
    title: "Criminal laws and their consequence",
    rating: 4,
    date: "July 16, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Proin eleifend metus non enim laoreet malesuada.",
  },
  {
    title: "Terrorism in the eyes of law",
    rating: 2,
    date: "July 16, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Proin eleifend metus non enim laoreet malesuada.",
  },
];

const Article = ({ title, rating, date, description }) => (
  <div
    className="flex h-fit p-2 mt-2 border border-gray-300 shadow-lg w-full rounded-lg transition-transform duration-300 transform hover:scale-105"
    alt="Profile"
  >
    <div className="w-fit flex flex-col p-3">
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <Rating rate={rating} />
      <p className="mt-2 text-sm text-blue-500 mb-2">Published on: {date}</p>
      <p className="text-gray-800 text-justify">{description}</p>
      <button className="bg-blue-500 text-white mt-2 flex justify-center items-center p-2 rounded self-end hover:bg-blue-300">
        <IoMdArrowForward className="mr-1" /> Read More
      </button>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function SavedArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          rating={article.rating}
          date={article.date}
          description={article.description}
        />
      ))}
    </div>
  );
}
