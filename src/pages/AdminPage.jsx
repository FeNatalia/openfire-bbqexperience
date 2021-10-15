// NPM package
import { Link } from "react-router-dom";

// Project file
import AdminItem from "../components/AdminItem";
import { useRestaurant } from "../state/RestaurantProvider";

export default function AdminPage() {
  // Global state
  const { categories } = useRestaurant();

  // Components
  const ProductItems = categories.map((item) => (
    <AdminItem key={item.id} item={item} to={`edit/${item.id}`} />
  ));

  return (
    <div className="admin-page">
      <header>
        <h1>Admin page</h1>
      </header>
      <div className="products-list">{ProductItems}</div>
      <div className="admin-add">
        <Link to="edit/new-profile" id="button-add">
          Add category
        </Link>
      </div>
    </div>
  );
}