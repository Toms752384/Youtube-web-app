import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import videos from './database/videosList.json'
import axios from 'axios';

export const VideosStates = () => {
    //state of list of videos
    const [videosList, setVideosList] = useState([]);

    //function to fetch videos from user
    const fetchVideos = async () => {
        try {
            const response = await axios.get('http://localhost:80/videos/fetchVideos');
            console.log(response); // Log the status message

            //check if valid info was fetched
            if (Array.isArray(response.data.videos)) {
                setVideosList(response.data.videos);
            } else {
                console.error('Fetched videos data is not an array:', response.data.videos);
            }
        }
        catch (error) {
            console.error('Error message:', error.message);
        }
    };

    //call the function in hook
    useEffect(() => {
        //call the function in the hook
        fetchVideos();
        console.log(videosList);
    }, []);

    //state of currnet video plays
    const defualtVideo = videosList[0];
    const [currentVideo, setCurrentVideo] = useState(defualtVideo);

    //function to add videos
    const addVideo = async (videoFile, videoBody) => {
        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('video', videoFile); // Ensure 'video' matches the field name in multer setup

            // Add additional video details to the FormData object
            for (const key in videoBody) {
                formData.append(key, videoBody[key]);
            }

            // Send a request to the server with FormData
            const response = await axios.post('http://localhost:80/videos/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Debug this and add conditions if needed
            // setVideosList([...videosList, response.data.video]); // Check if needed
        } catch (error) {
            console.error('Error message:', error.message);
        }

        //fetch videos when finished
        fetchVideos();
    }


    //function to change the currnet video
    const changeVideo = (clickedOnVideo) => {
        setCurrentVideo(clickedOnVideo);
    }

    //function to update comments 
    const updateComments = (videoUrl, newComments) => {
        //lambada function to update the comments of the specific video that was changed
        const updatedVideosList = videosList.map(video =>
            video.videoUrl === videoUrl ? { ...video, comments: newComments } : video
        );

        //update video list and the current video
        setVideosList(updatedVideosList);
        setCurrentVideo(updatedVideosList.find(video => video.videoUrl === videoUrl));
    };

    const deleteVideo = async (videoId) => {
        try {
            //call delete request with the id in the request
            const response = await axios.delete(`http://localhost:80/videos/${videoId}`);

            //call fetch videos to set the videos list to be the updated
            fetchVideos();

            //set the current video to be the first in the list
            setCurrentVideo(videosList[0]);
        }
        catch (error) {
            console.error('Error message:', error.message);
        }
    }

    // //function to update video details - title and description
    // const updateVideoDetails = (videoUrl, newDetails) => {
    //     //check the videos in the list using the url and edit it using the new details
    //     const updatedVideosList = videosList.map(video =>
    //         video.videoUrl === videoUrl ? { ...video, ...newDetails } : video
    //     );

    //     //update the list and the current video
    //     setVideosList(updatedVideosList);
    //     setCurrentVideo(updatedVideosList.find(video => video.videoUrl === videoUrl));
    // };

    const updateVideoDetails = async (videoId, newDetails) => {
    try{
        //call a put request with the id and the details
        const response = await axios.put(`http://localhost:80/videos/${videoId}`, newDetails);

        //fetch the videos to show the changes
        fetchVideos();

        //set the current video - check this!!
        // setCurrentVideo(response.data.video);
    }
    catch(error){
        console.error('Error message:', error.message);
    }
}

    return { videosList, currentVideo, defualtVideo, addVideo, changeVideo, updateComments, deleteVideo, updateVideoDetails };
};

