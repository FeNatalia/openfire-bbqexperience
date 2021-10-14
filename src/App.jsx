// NPM Packages
import { useState, useEffect, useCallback } from "react";

// Project files
import { getCollection } from "./scripts/firestore";
import { useRestaurant } from "./state/RestaurantProvider";
import Browser from "./components/Browser";
import "./styles/styles.css";

export default function App() {
  // Global state
  const { dispatch } = useRestaurant();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const path = "dishes";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const categories = await getCollection(path);

      dispatch({ type: "SET_CATEGORIES", payload: categories });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
