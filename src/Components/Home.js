import Navbar from "./Navbar";
import Search from "./Search";
import DisplayPosts from "./DisplayPosts";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title ="Home"
    })
    return(
        <div className="container">
            <Navbar />
            <Search />
            <DisplayPosts />
        </div>
    )
}

export default Home