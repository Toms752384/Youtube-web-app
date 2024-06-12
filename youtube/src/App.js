
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

  //state of currently logged in user - defualt value is null, and handle login function
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  };

  //state of videos
  const [videosList, setVideosList] = useState(videos);

  //state of currnet video
  const defualtVideo = videosList[0];
  const [currentVideo, setCurrentVideo] = useState(defualtVideo);
  const changeVideo = (clickedOnVideo) => {
    setCurrentVideo(clickedOnVideo);
  }

  //add argument of current video to video, and change fields of the video src, title, artist, subs, likes to come from the current video  
  //add argument of current video to main body
  //add a argument of current video to videocontainer
  //create a defualt video of the page
  //add on click function to set the current video to be the 

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users={users} onLogin={handleLogin} />} />
          <Route path='/signup' element={<RegistrationContainer users={users} addUser={addUser} />} />
          <Route path='/video' element={<VideoContainer videosList={videosList} currentVideo={currentVideo} />} /> 
          <Route path='/add' element={<AddVideoContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
