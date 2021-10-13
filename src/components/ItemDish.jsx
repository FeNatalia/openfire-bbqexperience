// NPM Package
import { Link } from "react-router-dom";

export default function ItemDish({ item, to }) {
  const { name, imageURL } = item;

  return (
    <li>
      <img src={imageURL} alt="Dish thumbnail" />
      <h2>{name}</h2>
      <Link className="button" to={to}>
        View dish
      </Link>
      <hr />
      <br />
    </li>
  );
}