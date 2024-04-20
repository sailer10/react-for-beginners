import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Container from 'react-bootstrap/Container';
import "../style.css";



function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        /*
        아래의 fetching 과정 설명
        1. (fetch)우선 해당 API 를 호출해서 데이터를 받아 온다.
        2. (then)데이터를 받아오면 HTML Response 객체에서 json 값만 꺼낸다
        3. (then)해당 json 값의 data 에서 movie 를 꺼낸다
        
        ** json 을 console.log(json) 해 봤더니 object 에 object.data.movies 이런 구조로 영화 정보가 들어있엇음!!
        ** API 를 사용할 떄 원하는 JSON 정보가 어떤 구조로 넘어오는지 출력해서 확인하는 방식도 있을것 같다.!!
        */

        // await 를 두번하는 이유: fetch 함수를 쓸때 await 를 쓰고 반환받은 promise 를 처리하기 위해 await 를 한번 더 사용해야한다.
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`, 
            {
                method: 'GET', 
                cache: 'force-cache',  
            }
        )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(movies);

        /*
        요즘엔 then 이런 구절보다 위의 async() => { await fetch(); } 이런식으로 써준다고 한다.
        참고: https://ko.javascript.info/async-await
        아래는 fetch().then() 구절
        fetch(`URL`)
        .then(response => response.json())
        .then((json) => (setMovies(json.movies)))
        .then(setLoading(false));
        
        */
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Container className="my-container">
            {loading ? <h1></h1> : movies.map(movie => (
                <div>
                    <br/>
                    <Movie 
                        id={movie.id}
                        key={movie.id}// key 값을 넣는건 매우 중요하다! 키는 React.js 의 map 안에서 Compoonent 들을 rendering 할때 사용한다!!
                        image={movie.medium_cover_image} 
                        genres={movie.genres}
                        summary={movie.summary}
                        title={movie.title}
                        year={movie.year}
                    />
                    <br/>
                </div>
            ))}
        </Container>
    );
}

export default Home;