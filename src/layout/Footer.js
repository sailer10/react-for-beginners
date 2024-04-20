import { Container } from "react-bootstrap";
import "./layout.css"

function Footer() {
    return (
        <footer className="p-5 bg-light border-top">
            <Container>
                <p>Designed by Bootstrap</p>
                <p className="mb-0">
                    <a href="#">Back to Top</a>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;