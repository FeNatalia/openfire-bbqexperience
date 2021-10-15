// NPM package
import { Link } from "react-router-dom";
// Project files
import Logo from "../assets/icons/Logo.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/menu">Menu</Link>
      <Link to="/">
        <img src={Logo} alt="openfire text surrounded by leaves" />
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}