import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginContainer from './login screen/LoginContainer.js';
import RegistrationContainer from './RegistrationScreen/RegistrationContainer.js';
import VideoContainer from './Watching a video/VideoContainer.js';
import AddVideoContainer from './add video screen/AddVideoContainer.js';
import HomeContainer from './Home page/HomeContainer.js';
import ProfileContainer from './Profile page/ProfileContainer.js';
import videos from './database/videosList.json'
import axios from 'axios';
import { UsersState } from './UsersState.js';
import {CurrentUserState} from './CurrentUserState.js';

function App() {
  //state of users
  const {users, addUser} = UsersState();

  //state of currently logged in user
  const {defualtUser, currentUser, setCurrentUser, handleLogin} = CurrentUserState();

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

  //state for search query
  const [searchQuery, setSearchQuery] = useState("");

  //function to handle search query update
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users={users} onLogin={handleLogin} />} />
          <Route path='/signup' element={<RegistrationContainer users={users} addUser={addUser} />} />
          <Route path='/profile' element={<ProfileContainer
            videosList={videosList}
            currentVideo={currentVideo}
            changeVideo={changeVideo}
            currentUser={currentUser}
            defualtUser={defualtUser}
            handleSignOut={handleLogin}
            updateComments={updateComments}
            deleteVideo={deleteVideo}
            updateVideoDetails={updateVideoDetails}
            searchQuery={searchQuery}
            handleSearch={handleSearch} />} />
          <Route path='/home' element={<HomeContainer
            videosList={videosList}
            currentVideo={currentVideo}
            changeVideo={changeVideo}
            currentUser={currentUser}
            defualtUser={defualtUser}
            handleSignOut={handleLogin}
            updateComments={updateComments}
            deleteVideo={deleteVideo}
            updateVideoDetails={updateVideoDetails}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />} />
          <Route path='/video' element={<VideoContainer
            videosList={videosList}
            currentVideo={currentVideo}
            changeVideo={changeVideo}
            currentUser={currentUser}
            defualtUser={defualtUser}
            handleSignOut={handleLogin}
            updateComments={updateComments}
            deleteVideo={deleteVideo}
            updateVideoDetails={updateVideoDetails}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />} />
          <Route path='/add' element={<AddVideoContainer addVideo={addVideo} videoList={videosList} currentUser={currentUser} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;