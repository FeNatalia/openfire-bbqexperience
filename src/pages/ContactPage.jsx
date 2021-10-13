// Project files
import ContactPhoto from "../assets/pictures/contact.jpg";
import RestaurantMap from "../assets/pictures/restaurant-map.jpg";

export default function ContactPage() {
  return (
    <div className="contact">
      <img
        className="contact-header"
        src={ContactPhoto}
        alt="a young woman and nature"
      />
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="info">
          <section>
            <h3>Where to find us</h3>
            <p>Stockholm, Sweden, Västra Kanalgatan 2B</p>
          </section>
          <section>
            <h3>Opening hours</h3>
            <p>Monday to Friday 11:00 - 22:00 Weekend 10:00 - 21:00</p>
          </section>
          <section>
            <h3>Got questions?</h3>
            <p>Call us +12 123 45 67 89 </p>
          </section>
        </div>
      </div>
      <div className="contact-map">
        <h3>Map</h3>
        <img src={RestaurantMap} alt="Restaurant map" />
      </div>
    </div>
  );
}
