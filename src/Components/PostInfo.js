import Navbar from "./Navbar";
import DisplayPosts from "./DisplayPosts";
import SelectedPosts from "./SelectedPost";
import GoToTop from './GoToTop';

const PostInfo = () => {
    return(
        <div className="selected-container">
                <Navbar />
                <SelectedPosts />
                <div className="more-posts">More Posts</div>
                <DisplayPosts />
            <GoToTop />
        </div>
    )
}

export default PostInfo;