import { useState, useEffect } from 'react';
import videos from './database/videosList.json'

export const VideosStates = () => {
    //state of list of videos
    const [videosList, setVideosList] = useState(videos);

    //state of currnet video plays
    const defualtVideo = videosList[0];
    const [currentVideo, setCurrentVideo] = useState(defualtVideo);

    //function to add videos
    const addVideo = (newVideo) => {
        setVideosList([...videosList, newVideo]);
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

    //function to delete a video and update the current video
    const deleteVideo = (videoUrl) => {
        //filter list to remove the given video
        const updatedVideosList = videosList.filter(video => video.videoUrl !== videoUrl);
        setVideosList(updatedVideosList);

        //update the current video to be the first in the list
        if (updatedVideosList.length > 0) {
            setCurrentVideo(updatedVideosList[0]);
        } else {
            setCurrentVideo(null);
        }
    };

    //function to update video details - title and description
    const updateVideoDetails = (videoUrl, newDetails) => {
        //check the videos in the list using the url and edit it using the new details
        const updatedVideosList = videosList.map(video =>
            video.videoUrl === videoUrl ? { ...video, ...newDetails } : video
        );

        //update the list and the current video
        setVideosList(updatedVideosList);
        setCurrentVideo(updatedVideosList.find(video => video.videoUrl === videoUrl));
    };

    return {videosList, currentVideo, defualtVideo, addVideo, changeVideo, updateComments, deleteVideo, updateVideoDetails};
};