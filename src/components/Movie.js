import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.module.css"
import { Badge, Container, Row, Stack } from "react-bootstrap";

function Movie({id, image, title, year, summary, genres}) {
    return (
        <Link to={`/movie/${id}`} className="card movie-card-size rounded-3 p-3" style={{textDecoration: "none"}}>
            <img src={image} alt="Loading..."/>
            <h2>{title} ({year})</h2> 
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            {genres ? 
                <Container fluid>
                    {genres.map(g => <Badge key={g} bg="secondary" className="m-1">{g}</Badge>)}
                </Container> : null
                // <ul> <il> </li> </ul> 에서 위 구조로 바꿈 2024/4/21
            }
        </Link>
            
    );
}

Movie.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
}

export default Movie;
