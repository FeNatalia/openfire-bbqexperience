export default function AdminProductItem({ item, to }) {
  const { name, imageURL, price } = item;

  return (
    <article className="dish-preview">
      <img src={imageURL} alt="Dish thumbnail" />
      <div className="dish-text">
        <h3>{name}</h3>
        <p>Price: {price} SEK:-</p>
      </div>
    </article>
  );
}