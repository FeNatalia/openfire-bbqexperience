// Project files
import EmailLogo from "../assets/icons/email.png";
import InstagramLogo from "../assets/icons/instagram.png";
import FacebookLogo from "../assets/icons/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="social-media">
        <a
          href="mailto:info@openfirebbq.se"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EmailLogo} alt="email logo" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={InstagramLogo} alt="Instagram logo" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={FacebookLogo} alt="Facebook logo" />
        </a>
      </span>
      <p>© 2021 • OpenFire - BBQ Experience</p>
    </footer>
  );
}
