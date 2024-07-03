import { useState, useEffect } from "react";
import Comments from "./Comments";
import Video from "./Video";
import axios from "axios";
//remove updateComments - moved here
function MainBody({ currentVideo, currentUser, updateComments, deleteVideo, updateVideoDetails, setVideosList, setCurrentVideo, videosList }) {

    //state of comments of the videos displayed
    const [commentsList, setComments] = useState([]);

    //use effect to change the comments to be the currentVideo's comments
    useEffect(() => {
        getCommentsByVideoId(currentVideo._id);
        console.log(commentsList);
    }, []);

    //fetch comments by Id of video
    const getCommentsByVideoId = async (videoId) => {
        try {
            const response = await axios.get(`http://localhost:80/api/videos/${videoId}/comments`);
            const newCommenstList = response.data.comments;
            setComments(newCommenstList); 
        } catch (error) {
            console.error('Error message:', error.message);
        }
    }

    
    //add comment function
    const addComment = async (newComment) => {
        try {
            const response = await axios.post(`http://localhost:80/api/videos/${currentVideo._id}/comments/${currentUser._id}`, newComment);
            const updatedComments = [...commentsList, response.data.comment];
            setComments(updatedComments);
        } catch (error) {
            console.error('Error message:', error.message);
        }
    }

    // //add comment function
    // const addComment = (newComment) => {
    //     const updatedComments = [...commentsList, newComment];
    //     setComments(updatedComments);
    //     updateCommentsRemove(currentVideo.videoUrl, updatedComments);
    // }

    //delete comment function
    const deleteComment = (commentIndex) => {
        //filter function to keep all the other comments
        const updatedComments = commentsList.filter((_, index) => index !== commentIndex);

        //update comments
        setComments(updatedComments);
        updateCommentsRemove(currentVideo.videoUrl, updatedComments);
    };

    //edit comment function
    const editComment = (commentIndex, newText) => {
        const updatedComments = commentsList.map((comment, index) =>
            index === commentIndex ? { ...comment, text: newText } : comment
        );
        setComments(updatedComments);
        updateCommentsRemove(currentVideo.videoUrl, updatedComments);
    };

    //weird function that needs to gooooo - updates all the comments in the list for some reason
    const updateCommentsRemove = (videoUrl, newComments) => {
        //lambada function to update the comments of the specific video that was changed
        const updatedVideosList = videosList.map(video =>
            video.videoUrl === videoUrl ? { ...video, comments: newComments } : video
        );

        //update video list and the current video
        setVideosList(updatedVideosList);
        setCurrentVideo(updatedVideosList.find(video => video.videoUrl === videoUrl));
    };


    return (
        <div className="col-md-8">
            <Video currentVideo={currentVideo} currentUser={currentUser} deleteVideo={deleteVideo} updateVideoDetails={updateVideoDetails}/>
            <Comments comments={commentsList} currentUser={currentUser} addComment={addComment} deleteComment={deleteComment} editComment={editComment}/>
        </div>
    );
}
export default MainBody;