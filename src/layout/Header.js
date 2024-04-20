import "react-bootstrap"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar p-3 bg-light border-bottom">
                <h1>
                    <Link to="/" className="navbar-brand">Home</Link>
                </h1>
            </nav>
        </header>
    );
}

export default Header;