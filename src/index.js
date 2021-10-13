import React from "react";
import ReactDOM from "react-dom";

import { RestaurantProvider } from "./state/RestaurantProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
