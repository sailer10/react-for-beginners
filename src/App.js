import Home from "./routes/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Detail from "./routes/Detail";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";


function App() {
    /*
    react-router-dom@5 버젼 -> 
    1. Routes -> Switch , 
    2. <Route> <Home/> <Route/> 안에 Home 을 포함하는 구조. 6버젼에선 element프로퍼티에 써줌

    <Link to="/movie"> 를 통해 ROute 를 이동한다. 이렇게 하면 페이지를 새로고침 하지 않는다. Movie.js 에 보면 Link 있음
    */
    return (
        <Router>
            <Header/>

            <article className="main">
                <Routes>
                    {/* : 콜론을 씀으로써 변수(Dynamic url)를 사용할 수 있다. */}
                    <Route path="/movie/:id" element={<Detail/>}/>
                    <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
                </Routes>
            </article>

            <Footer/>
        </Router>
    );
}

export default App;