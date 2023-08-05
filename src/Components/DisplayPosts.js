import React, {useEffect} from "react"; 
import {fetchPost, selectedPost} from "../redux/actions/postActions";
import {useDispatch, useSelector} from "react-redux";
import Polygon from "./../Styles/Polygon.svg";
import { useNavigate } from "react-router-dom";

const DisplayPosts = () => {
    const {loading, data, error} = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(fetchPost());
        },[dispatch]
    )
    return(
        <div className="posts-container">
            {
                data &&
                data.map((post) => (
                    <div key={post.id} className="post" >
                        <div className="img-div">
                            <img src={`https://picsum.photos/200?random=${post.id}`} alt="img"></img>
                        </div>
                        <div className="content">
                            <div className="details">
                                <div className="title">{post.title}</div>
                                <div className="desc">{post.body}</div>
                                <div className="more">Read more...</div>
                            </div>
                            <div className="btn">
                                <div>
                                    <button onClick={() => {
                                        dispatch(selectedPost(post));
                                        navigate("/postInfo")
                                        }}>
                                        <img src={Polygon} alt="btn"></img>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayPosts;