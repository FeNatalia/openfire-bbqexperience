// NPM Package
import { Link } from "react-router-dom";

export default function AdminItem({ item, to }) {
  const { name, imageURL } = item;

  return (
    <article className="dish-preview">
      <img src={imageURL} alt="Dish thumbnail" />
      <div className="dish-text">
        <h3>{name}</h3>
        <Link className="button-details" to={to}>
          Edit category
        </Link>
      </div>
    </article>
  );
}