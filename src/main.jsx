import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styling/navbar.css";
import "./styling/Home.css";
import "./styling/footer.css";
import "./styling/login.css";
import "./styling/Manage.css";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
