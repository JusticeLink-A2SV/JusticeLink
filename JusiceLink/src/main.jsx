import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LawyerProvider } from "./Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LawyerProvider>
      <App />
    </LawyerProvider>
  </React.StrictMode>
);
