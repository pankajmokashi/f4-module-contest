import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Back from "./../Styles/Back.svg";
import { useNavigate } from 'react-router-dom';


const SelectedPosts = () => {
    let [state, setState] = useState(true);
    let [color, setColor] = useState({
        details: "text",
        info: "active"
    })
    let post = useSelector(state => state.selectedReducer);
    let navigate = useNavigate();

    useEffect(() => {
            document.title = "item/" + post?.id;
    })
    return(
        <div className="selected-post">
            <div className='post-number'>
                <button onClick={() => navigate("/")}>
                    <img src={Back} alt="back"></img>
                </button>
                <div className='heading'>Post Number {post?.id}</div>
            </div>
            <div className='sel-post'>
                <div className='sel-img'>
                    <img src={`https://picsum.photos/200?random=${post?.id}`} alt="img"></img>
                </div>
                <div className='post-content'>
                    <div className='btns'>
                        <button id={color.details} onClick={() => {
                            setState(false);
                            setColor({details: "active", info: "text"});
                        }}>Details</button>
                        <button id={color.info} onClick={() => {
                            setState(true);
                            setColor({details: "text", info: "active"})
                        }}>UserInfo</button>
                    </div>
                        {
                            state ?
                            <div className='post-desc'>Post was posted by {post?.userId}</div> :
                            <div className='post-desc'>{post?.body}</div>
                        }
                </div>
            </div>
        </div>
    )
} 
export default SelectedPosts;