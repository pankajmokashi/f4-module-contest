import Logo from "./../Styles/Logo.svg";
import Home from "./../Styles/Home.svg";
import Bell1 from "./../Styles/BellIcon.svg";
import Bell2 from "./../Styles/BellIcon1.svg";
import Bookmark from "./../Styles/Bookmark.svg";
import Oval1 from "./../Styles/Oval.svg";
import Oval2 from "./../Styles/Oval2.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    return(
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            <nav>
                <div onClick={() => navigate("/")}>
                    <img src={Home} alt="logo"></img>
                </div>
                <div className="bell-icon">
                    <div className="bell1">
                        <img src={Bell1} alt="logo"></img>
                    </div>
                    <div className="bell2">
                        <img src={Bell2} alt="logo"></img>
                    </div>
                </div>
                <div>
                    <img src={Bookmark} alt="logo"></img>
                </div>
                <div className="bell-icon">
                <div className="bell1">
                        <img src={Oval1} alt="logo"></img>
                    </div>
                    <div className="bell2">
                        <img src={Oval2} alt="logo"></img>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar