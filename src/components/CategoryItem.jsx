export default function CategoryItem({ item }) {
  const { description, imageURL, name } = item;

  return (
    <section className="category-card">
      <img id="section-image" src={imageURL} alt="Category thumbnail" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p id="button-view">View menu</p>
    </section>
  );
}