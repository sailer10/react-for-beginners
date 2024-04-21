import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";


export default function Local() {
    const [localMovies, setLocalMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getLocalMovies = async () => {
    //     if (!loading) {
    //         const json = await {
    //             await fetch(``,
    //                 {

    //                 }
    //             )

            
    //         }

    //     }


    // }

    // useEffect(() => {
    //     getLocalMovies();

    //     console.log("get local movies...");
    // },[])

    return (
        <Container className="my-container">
            <p>Hello</p>
        </Container>
    )
}