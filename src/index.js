import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Bad", "Average", "Good", "Very Good", "Excellent"]}
      defaultRating={2}

    />
    <StarRating color={"red"} size={100} className={"test"} defaultRating={0} />
  </React.StrictMode>
);
