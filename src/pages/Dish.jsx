// NPM package
import { useParams, Link } from "react-router-dom";

// Project file
import { useRestaurant } from "../state/RestaurantProvider";

export default function Dish() {
  // Global state
  const { categories, dishId } = useParams();
  const { dishes } = useRestaurant();

  // Properties
  const dish = dishes.find((item) => item.id === dishId);

  // Components
  const ErrorComponent = (
    <p>
      Something happened please go to the home page and try again{" "}
      <Link to="/">Go home</Link>
    </p>
  );

  if (dish === undefined) return ErrorComponent;

  return (
    <div>
      <img src={dish.imageURL} alt="dish thumbnail" />
      <h1>{dish.name}</h1>
      <p>Price: {dish.price}</p>
    </div>
  );
}