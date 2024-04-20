import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.module.css"

function Movie({id, image, title, year, summary, genres}) {
    return (
        <Link to={`/movie/${id}`} className="card movie-card-size" style={{textDecoration: "none"}}>
            <img src={image} alt="image loading..."/>
            <h2>
                <super>{title} ({year})</super>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            {genres ? 
                <ul>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul> : null
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