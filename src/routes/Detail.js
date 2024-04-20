import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
import Container from "react-bootstrap/esm/Container";
import "../style.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState();

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`, 
            {
                method: 'GET',
                cache: 'default',
            })
        ).json();
        setDetails(json.data.movie);

        setLoading(true);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <Container className="my-container">
            {!loading ? <h2></h2> :
                <div>
                    <img src={details.large_cover_image}/>
                    <h1>{details.title}</h1>
                    <p>{details.description_full ? details.description_full : "요약 없음"}</p>
                    {details.genres ? 
                        <ul>
                            {details.genres.map(g => <li key={g}>{g}</li>)}
                        </ul> : null    
                    }
                </div>
            }
        </Container>
        
    );
}

export default Detail;