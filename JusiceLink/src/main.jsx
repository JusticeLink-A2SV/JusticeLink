import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LawyerProvider } from "./Context/ContextProvider";
import { AuthProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LawyerProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LawyerProvider>
  </React.StrictMode>
);
