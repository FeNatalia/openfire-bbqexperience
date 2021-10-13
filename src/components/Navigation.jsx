// NPM package
import { Link } from "react-router-dom";
// Project files
import Logo from "../assets/icons/Logo.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Menu</Link>
      <Link to="/welcome">
        <img
          src={Logo}
          alt="openfire text surrounded by leaves"
        />
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}