
import React from 'react';
import LoginContainer from './login screen/LoginContainer.js';
import RegistrationContainer from './RegistrationScreen/RegistrationContainer.js';
import VideoContainer from './Watching a video/VideoContainer.js';
import AddVideoContainer from './add video screen/AddVideoContainer.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer />} />
          <Route path='/signup' element={<RegistrationContainer />} />
          <Route path='/video' element={<VideoContainer />} />
          <Route path='/add' element={<AddVideoContainer />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
