// NPM package
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return(
        <div className="welcome">
            <div className="welcome-text">
                <h1>Welcome to OpenFire</h1>
                <p>BBQ Experience</p>
                <Link to="/" className="button-details">Go to Menu</Link>
            </div>
        </div>
    )
}