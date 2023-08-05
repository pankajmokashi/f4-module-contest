import Home from "./Components/Home";
import PostInfo from "./Components/PostInfo";
import {Routes, Route} from "react-router-dom";

const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/PostInfo" element={<PostInfo />}></Route>
            </Routes>
        </div>
    )
}

export default App