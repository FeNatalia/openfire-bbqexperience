// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject files
import categoriesReducer from "./categoriesReducer";
import dishReducer from "./dishReducer";

// Properties
const RestaurantContext = createContext(null);

export function RestaurantProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);
  const [dishes, dispatch2] = useReducer(dishReducer, []); // hold the specific document

  return (
    <RestaurantContext.Provider
      value={{ categories, dishes, dispatch, dispatch2 }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);

  return context;
}