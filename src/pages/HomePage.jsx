// NPM package
import { Link } from "react-router-dom";

export default function HomePage() {
    return(
        <div className="welcome">
            <div className="welcome-text">
                <h1>OpenFire</h1>
                <h1>BBQ Experience</h1>
                <p>Enjoy delicious campfire food without actually going to camp</p>
                <Link to="/menu" className="button-details">Go to Menu</Link>
            </div>
        </div>
    )
}