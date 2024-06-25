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
import { CurrentUserState } from './CurrentUserState.js';
import { VideosStates } from './VideosStates.js';
import { SearchState } from './SearchState.js';

function App() {
  //state of users
  const {users, addUser} = UsersState();

  //state of currently logged in user
  const {defualtUser, currentUser, setCurrentUser, handleLogin} = CurrentUserState();

  const {videosList, currentVideo, defualtVideo, addVideo, changeVideo, updateComments, deleteVideo, updateVideoDetails} = VideosStates();

  const {searchQuery, handleSearch, setSearchQuery} = SearchState();

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