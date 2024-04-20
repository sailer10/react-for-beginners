import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, image, title, year, summary, genres}) {
    return (
        <div>
            <img src={image} alt="image loading..."/>
            <h2>
                <Link to={`/movie/${id}`}>{title} ({year})</Link>    
            </h2>
            <p>{summary}</p>
            {genres ? 
                <ul>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul> : null
            }
        </div>
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