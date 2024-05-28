import './App.css';
import React from 'react';
// import headerOfRegist from './Registration screen/headerOfRegist';
// import impo from './Registration screen/impo';
import LoginContainer from './login screen/LoginContainer';
import './login screen/Login.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoContainer from './Watching a video/VideoContainer';
import './Watching a video/Video.css'

function App() {
  return (
    <VideoContainer></VideoContainer>
  );
}

export default App;
