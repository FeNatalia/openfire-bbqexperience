// NPM Package
import { Link } from "react-router-dom";

export default function AdminProductItem({ item, to }) {
  const { name, imageURL, price } = item;

  return (
    <article className="dish-preview">
      <img src={imageURL} alt="Dish thumbnail" />
      <div className="dish-text">
        <h3>{name}</h3>
        <p>Price: {price} SEK:-</p>
        {/*<Link className="button-details" to={to}>
          Edit product
  </Link>*/}
      </div>
    </article>
  );
}