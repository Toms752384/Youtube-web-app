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


    //delete comment function
    const deleteComment = async (commentId) => {
        try {
            //delete the comment from the server
            const response = await axios.delete(`http://localhost:80/api/videos/${currentUser._id}/${currentVideo._id}/comments/${commentId}`);

            //if successful, update the list
            if (response.status === 200) {
                //filter out the deleted comment from the comments list
                const updatedComments = commentsList.filter(comment => comment._id !== commentId);

                //update the state with the filtered list
                setComments(updatedComments);
            } else {
                console.error('Failed to delete comment, server responded with status:', response.status);
            }
        } catch (error) {
            console.error('Error message:', error.message);
        }
    }

    //edit comment function
    const editComment = async (commentId, newContent) => {
        try {
            const response = await axios.put(`http://localhost:80/api/videos/${currentUser._id}/${currentVideo._id}/comments/${commentId}`, { content: newContent }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });            
            //if successful, update the list
            if (response.status === 200) {
                //map over the comments list and update the specific comment
                const updatedComments = commentsList.map(comment =>
                    comment._id === commentId ? { ...comment, content: newContent } : comment
                );

                //update the state with the filtered list
                setComments(updatedComments);
            } else {
                console.error('Failed to delete comment, server responded with status:', response.status);
            }
        } catch (error) {
            console.error('Error message:', error.message);
        }
    }
    // const editComment = (commentIndex, newText) => {
    //     const updatedComments = commentsList.map((comment, index) =>
    //         index === commentIndex ? { ...comment, text: newText } : comment
    //     );
    //     setComments(updatedComments);
    //     updateCommentsRemove(currentVideo.videoUrl, updatedComments);
    // };

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
            <Video currentVideo={currentVideo} currentUser={currentUser} deleteVideo={deleteVideo} updateVideoDetails={updateVideoDetails} />
            <Comments comments={commentsList} currentUser={currentUser} addComment={addComment} deleteComment={deleteComment} editComment={editComment} />
        </div>
    );
}
export default MainBody;