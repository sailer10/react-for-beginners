import { Badge } from "react-bootstrap";
import "./ToTheTop.module.css"
import { Link } from "react-router-dom";


export default function ToTheTop() {

    return (
        <a href="#" className="m-4" style={{ position: "fixed", bottom: 0, right: 0, fontSize: 19 }}>
            <Badge pill className="border border-1 border-dark" bg="light" text="black">
                맨 위로
            </Badge>
        </a>
    )
}