
import React, { useState, useEffect } from 'react';
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
  const defualtUser = { "username": "New User", "password": "", "nickname": "New user", "avatar": "/localPhotos/defualtAvatar.png" };
  const [currentUser, setCurrentUser] = useState(defualtUser);
  const handleLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  };

  //state of list of videos
  const [videosList, setVideosList] = useState(videos);

  //state of currnet video played
  const defualtVideo = videosList[0];
  const [currentVideo, setCurrentVideo] = useState(defualtVideo);
  const changeVideo = (clickedOnVideo) => {
    setCurrentVideo(clickedOnVideo);
  }

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users={users} onLogin={handleLogin} />} />
          <Route path='/signup' element={<RegistrationContainer users={users} addUser={addUser} />} />
          <Route path='/video' element={<VideoContainer videosList={videosList} currentVideo={currentVideo}
            changeVideo={changeVideo} currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleLogin} />} />
          <Route path='/add' element={<AddVideoContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//first feature - comments for each video - done

//second feature - adding new comments
//send currentUser state to mainBody from videoContainer
//create useState for the comments list and adding new comment to it
//send comments list(new useState), addComment function useState, and the current user from main body and the current user to comments.js
//create new states of newComment comment in comments
//add the necessery divs of input 



//third feature - editing and deleting comments