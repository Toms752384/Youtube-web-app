import React, { useState } from 'react';
import LoginContainer from './login screen/LoginContainer.js';
import RegistrationContainer from './RegistrationScreen/RegistrationContainer.js';
import VideoContainer from './Watching a video/VideoContainer.js';
import AddVideoContainer from './add video screen/AddVideoContainer.js';
import videos from './database/videosList.json'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //state of list of users to access from across the program, and add a new user function
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  //state of currently logged in user
  const defualtUser = { "username": "username", "password": "", "nickname": "nickname", "avatar": "/localPhotos/defualtAvatar.png" };
  const [currentUser, setCurrentUser] = useState(defualtUser);
  const handleLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  };

  //state of list of videos
  const [videosList, setVideosList] = useState(videos);

  //function to add videos
  const addVideo = (newVideo) => {
    setVideosList([...videosList, newVideo]);
  }

  //state of currnet video plays
  const defualtVideo = videosList[0];
  const [currentVideo, setCurrentVideo] = useState(defualtVideo);

  //function to change the currnet video
  const changeVideo = (clickedOnVideo) => {
    setCurrentVideo(clickedOnVideo);
  }

  //update comments function
  const updateComments = (videoUrl, newComments) => {
    //lambada function to update the comments of the specific video that was changed
    const updatedVideosList = videosList.map(video =>
      video.videoUrl === videoUrl ? { ...video, comments: newComments } : video
    );

    //update video list and the current video
    setVideosList(updatedVideosList);
    setCurrentVideo(updatedVideosList.find(video => video.videoUrl === videoUrl));
  };

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users={users} onLogin={handleLogin} />} />
          <Route path='/signup' element={<RegistrationContainer users={users} addUser={addUser} />} />
          <Route path='/video' element={<VideoContainer
            videosList={videosList}
            currentVideo={currentVideo}
            changeVideo={changeVideo}
            currentUser={currentUser}
            defualtUser={defualtUser}
            handleSignOut={handleLogin}
            updateComments={updateComments} />} />
          <Route path='/add' element={<AddVideoContainer addVideo={addVideo} videoList={videosList} currentUser={currentUser}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//first - design - done
//add three dots to each video - done
//add an opening list to the dots with edit video and delete video options, and pointer (cursor) - done

//feature of deleting a video

