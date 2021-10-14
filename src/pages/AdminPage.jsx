// NPM package
import { Link } from "react-router-dom";

// Project file
import AdminItem from "../components/AdminItem";
import { useRestaurant } from "../state/RestaurantProvider";

export default function AdminPage(){
    // Global srare
    const { categories } = useRestaurant();

    // Components
    const ProductItems = categories.map((item) => (
        <AdminItem key ={item.id} item={item} to={`edit/${item.id}`} />
    ))

    console.log(ProductItems);
    return(
        <div className="admin-page">
            <header>
                <h1>Admin page</h1>
            </header>
            {ProductItems}
            <div className="admin-add">
                <Link to="edit/new-profile" id="button-add">
                    Add category
                </Link>
            </div>
        </div>
    )
}