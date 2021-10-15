// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useRestaurant } from "../state/RestaurantProvider";
import CategoryItem from "../components/CategoryItem";

export default function MenuPage() {
  // Global state
  const { categories } = useRestaurant();

  // Components
  const CategoryItems = categories.map((item) => (
    <Link key={item.id} to={`/category/${item.id}`}>
      <CategoryItem item={item} />
    </Link>
  ));

  return (
    <div className="menu-page">
      <div className="categories">{CategoryItems}</div>
    </div>
  );
}