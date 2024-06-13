import { useState, useEffect } from "react";
import Comments from "./Comments";
import Video from "./Video";

function MainBody({ currentVideo, currentUser }) {

    //state of comments of the videos displayed
    const [commentsList, setComments] = useState(currentVideo.comments);

    useEffect(() => {
        setComments(currentVideo.comments);
    }, [currentVideo]);

    const addComment = (newComment) => {
        setComments([...commentsList, newComment]);
    }

    return (
        <div className="col-md-8">
            <Video currentVideo={currentVideo}/>
            <Comments comments={currentVideo.comments} />
        </div>
    );
}
export default MainBody;