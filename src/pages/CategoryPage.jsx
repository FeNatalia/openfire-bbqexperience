// NPM package
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Project files
import { getCollection } from "../scripts/firestore";
import { useRestaurant } from "../state/RestaurantProvider";
import ProductItem from "../components/ProductItem.jsx";

export default function CategoryPage() {
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
  const Products = dishes.map((item) => (
    <ProductItem key={item.id} item={item} to={`/dish/${item.id}`} />
  ));

  return (
    <div className="categories-page">
      <img id="section-image" src={category.imageURL} alt=""/>
      <div className="category-info">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      {/* Dynamic content that comes from this page fetch */}
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <div className="products-list">{Products}</div>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}