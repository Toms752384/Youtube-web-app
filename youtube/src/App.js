
import React from 'react';
import LoginContainer from './login screen/LoginContainer.js';
import RegistrationContainer from './RegistrationScreen/RegistrationContainer.js';
import VideoContainer from './Watching a video/VideoContainer.js';
import AddVideoContainer from './add video screen/AddVideoContainer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer />} />
          <Route path='/Signup' element={<RegistrationContainer />} />
          <Route path='/Video' element={<VideoContainer />} />
          <Route path='Add' element={<AddVideoContainer />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
