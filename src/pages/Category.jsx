// NPM package
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Project files
import ItemDish from "../components/ItemDish.jsx";
import { getCollection } from "../scripts/firestore";
import { useRestaurant } from "../state/RestaurantProvider";

export default function Category() {
  // Global state
  const { categories, dispatch2 } = useRestaurant();
  const { categoryId } = useParams();

  // Local state
  const [dishes, setDishes] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
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

  // Components
  const Categories = dishes.map((item) => (
    <ItemDish key={item.id} item={item} to={`/dish/${item.id}`} />
  ));

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>

      {/* Dynamic content that comes from this page fetch */}
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ol>{Categories}</ol>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}