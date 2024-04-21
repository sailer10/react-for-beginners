import Home from "./routes/Home";
import {
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom'
import Detail from "./routes/Detail";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";
import Local from "./routes/Local";
import ToTheTop from "./components/layout/ToTheTop";


function App() {
    /*
    react-router-dom@5 버젼 -> 
    1. Routes -> Switch , 
    2. <Route> <Home/> <Route/> 안에 Home 을 포함하는 구조. 6버젼에선 element프로퍼티에 써줌

    <Link to="/movie"> 를 통해 ROute 를 이동한다. 이렇게 하면 페이지를 새로고침 하지 않는다. Movie.js 에 보면 Link 있음
    */
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <ScrollToTop/>
            <Routes>
                {/* : 콜론을 씀으로써 변수(Dynamic url)를 사용할 수 있다. */}
                <Route path="/movie/:id" element={<Detail/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/local" element={<Local/>} />
            </Routes>
            <ToTheTop/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;