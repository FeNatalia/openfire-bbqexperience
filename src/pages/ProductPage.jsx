// NPM package
import { useParams, useHistory, Link } from "react-router-dom";

// Project file
import { useRestaurant } from "../state/RestaurantProvider";

export default function ProductPage() {
  // Global state
  const { categories, dishId } = useParams();
  const { dishes } = useRestaurant();
  const location = useHistory();

  // Properties
  const dish = dishes.find((item) => item.id === dishId);

  // Components
  const ErrorComponent = (
    <p>
      Something happened please go to the home page and try again{" "}
      <Link to="/">Go to the main page</Link>
    </p>
  );

  if (dish === undefined) return ErrorComponent;

  return (
    <div className="product-page">
      <img id="section-image" src={dish.imageURL} alt="dish thumbnail" />
      <div className="product-text">
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p>Price: {dish.price} SEK :-</p>
        <div className="product-link">
          <button onClick={() => location.goBack()} className="button-save">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}