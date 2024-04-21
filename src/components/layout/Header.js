import "react-bootstrap"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar p-3 bg-light border-bottom">
                <Container>
                    <h1>
                        <Link to="/" className="navbar-brand">Global</Link>
                    </h1>
                    <h1>
                        <Link to="/local" className="navbar-brand">Local</Link>
                    </h1>
                </Container>
            </nav>
        </header>
    );
}

export default Header;