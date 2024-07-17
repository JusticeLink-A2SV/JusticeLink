import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdSend } from "react-icons/md";

export default function FeedbackAndReview() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 mb-8 mt-20 shadow-lg w-full md:w-3/4 mx-auto">
      <h1 className="text-center font-bold md:text-3xl sm:text-lg text-blue-500">
        Give Us Your Feedback
      </h1>
      <div className="p-4 md:p-8 sm:p-2">
        <div className="flex flex-col">
          <div className="flex w-full md:w-2/3 mx-auto space-x-5 justify-center items-center">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <button
                  type="button"
                  key={starValue}
                  className={`text-2xl ${
                    starValue <= rating ? "text-yellow-400" : "text-gray-300"
                  } focus:outline-none`}
                  onClick={() => setRating(starValue)}
                >
                  <FaStar />
                </button>
              );
            })}
          </div>
          <div className="flex justify-around w-full md:w-2/3 mx-auto text-gray-400 md:mt-2">
            <h2>Not Satisfied</h2>
            <h2>Satisfied</h2>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3 mx-auto mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-blue-500">
            What are your thoughts?
          </h2>
          <div className="flex flex-col items-start">
            <textarea
              className="flex-1 bg-gray-100 border border-gray-300 rounded-lg p-3 resize-none outline-none w-full"
              placeholder="Write your comment here..."
              rows="4"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <button
              className={`flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg mt-3 md:ml-auto ${
                !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setComment("")}
              disabled={!comment.trim()}
            >
              <MdSend className="mr-2" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
