import { useState } from "react";
import SavedArticles from "./SavedArticles";
import SavedLawyers from "./SavedLawyer";
export default function Saved() {
  const [savedItem, setSavedItem] = useState("articles");
  const handleSavedItemClick = (item) => {
    setSavedItem(item);
  };
  const showContent = () => {
    if (savedItem === "articles") {
      return <SavedArticles />;
    } else {
      return <SavedLawyers />;
    }
  };
  return (
    <div>
      <div
        className="flex  h-full mt-10 border border-gray-300 shadow-lg w-3/4 mx-auto
          "
      >
        <div
          className={`flex justify-center p-2 w-1/2 min-h-full ${
            savedItem === "articles" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleSavedItemClick("articles")}
        >
          Articles
        </div>
        <div
          className={`flex justify-center p-2 w-1/2 min-h-full ${
            savedItem === "lawyers" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleSavedItemClick("lawyers")}
        >
          Lawyers
        </div>
      </div>
      <div className="w-3/4 mx-auto p-3 border border-gray-400">
        {showContent()}
      </div>
    </div>
  );
}
