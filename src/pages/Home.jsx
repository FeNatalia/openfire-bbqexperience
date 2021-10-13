// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useRestaurant } from "../state/RestaurantProvider";
import ItemCategory from "../components/ItemCategory";

export default function Home() {
  // Global state
  const { categories } = useRestaurant();

  // Components
  const CategoryItems = categories.map((item) => (
    <Link key={item.id} to={`/category/${item.id}`}>
      <ItemCategory item={item} />
    </Link>
  ));

  return (
    <div className="categories">
      {CategoryItems}
    </div>
  );
}