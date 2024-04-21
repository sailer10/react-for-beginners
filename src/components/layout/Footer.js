import { Container } from "react-bootstrap";
import "./layout.css"

function Footer() {
    return (
        <footer className="p-5 bg-light border-top">
            <Container>
                <p>
                    Designed by
                    <strong> Bootstrap</strong>
                </p>
                <p className="mb-0">
                    <a href="#">위로가기</a>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;