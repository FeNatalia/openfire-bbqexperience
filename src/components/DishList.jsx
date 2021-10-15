// NPM package
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Project file
import { useRestaurant } from "../state/RestaurantProvider";
import AdminItem from "./AdminItem";
import { useEffect, useCallback } from "react";
import { getCollection } from "../scripts/firestore";
import ProductItem from "./ProductItem";
import AdminProductItem from "./AdminProductItem";

export default function DishList( { categoryId }) {
  // Global state
  const { categories, dispatch2 } = useRestaurant();
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0);

  const category = categories.find((item) => item.id === categoryId);
  const path = `dishes/${categoryId}/content`;

  // Methods
  const fetchData = useCallback(async (path) => {
      try {
      const dishes = await getCollection(path);

      setDishes(dishes);
      dispatch2({ type: "SET_DISHES", payload: dishes });
      setStatus(1);
      } catch {
      setStatus(2);
      }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  const DishItems = dishes.map((item) => (
      <AdminProductItem key ={item.id} item={item}/>
  ))

  return (
    <div>
      {dishes.length === 0 ? null : 
      <div className="product-page">
        <h2>Products in this category:</h2>
        {DishItems}
      </div>}
    </div>
  );
}
