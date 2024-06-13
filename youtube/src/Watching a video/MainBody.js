import { useState, useEffect } from "react";
import Comments from "./Comments";
import Video from "./Video";

function MainBody({ currentVideo, currentUser, updateComments }) {

    //state of comments of the videos displayed
    const [commentsList, setComments] = useState(currentVideo.comments);

    //use effect to change the comments to be the currentVideo's
    useEffect(() => {
        setComments(currentVideo.comments);
    }, [currentVideo]);

    //add comment function, that updates the useState from App.js
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