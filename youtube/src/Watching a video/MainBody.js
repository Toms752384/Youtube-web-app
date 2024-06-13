import { useState, useEffect } from "react";
import Comments from "./Comments";
import Video from "./Video";

function MainBody({ currentVideo, currentUser, updateComments }) {

    //state of comments of the videos displayed
    const [commentsList, setComments] = useState(currentVideo.comments);

    useEffect(() => {
        setComments(currentVideo.comments);
    }, [currentVideo]);

    const addComment = (newComment) => {
        const updatedComments = [...commentsList, newComment];
        setComments(updatedComments);
        updateComments(currentVideo.videoUrl, updatedComments);
    }

    return (
        <div className="col-md-8">
            <Video currentVideo={currentVideo}/>
            <Comments comments={commentsList} currentUser={currentUser} addComment={addComment} />
        </div>
    );
}
export default MainBody;