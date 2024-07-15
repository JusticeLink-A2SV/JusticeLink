import { useState, useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./Rating";
import { LawyerContext } from "../../Context/ContextProvider";

function Review() {
  const { reviews } = useContext(LawyerContext);
  const [expandedReview, setExpandedReview] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(2);

  const toggleReadMore = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 2);
  };

  if (!reviews || reviews.length === 0) {
    return <p className="text-center text-gray-600">No reviews available.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      {reviews.slice(0, visibleReviews).map((review, idx) => (
        <div key={idx} className="relative p-6 w-full max-w-2xl">
          <div className="absolute top-0 left-0 mt-[-15px] ml-[-8px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
              <FaQuoteLeft color="white" />
            </div>
          </div>
          <div className="bg-blue-200 rounded-lg py-8 px-4 md:py-14 md:px-5 shadow-lg relative z-0">
            <h2 className="font-semibold mb-2 text-lg md:text-xl">
              {review.title}
            </h2>
            <p className="text-justify text-sm md:text-base">
              {expandedReview === idx
                ? review.description
                : `${review.description.substring(0, 100)}...`}
            </p>
            <p
              className="text-blue-600 text-right mb-2 cursor-pointer"
              onClick={() => toggleReadMore(idx)}
            >
              {expandedReview === idx ? "Read Less" : "Read More"}
            </p>
            <hr className="bg-blue-600" />
            <div className="flex justify-between mt-2 mb-2 text-sm md:text-base">
              <h2>{review.name}</h2>
              <h3 className="text-right">{review.status}</h3>
            </div>
            <Rating rate={review.rate} />
          </div>
        </div>
      ))}
      {visibleReviews < reviews.length && (
        <p
          className="text-blue-600 text-center cursor-pointer mt-4 text-sm md:text-base"
          onClick={showMoreReviews}
        >
          See More
        </p>
      )}
    </div>
  );
}

export default Review;
