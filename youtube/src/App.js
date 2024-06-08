
import React, { useState } from 'react';
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
  //local list of users to access from across the program
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
    console.log(users);
  };

  //add current user functions!

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users = {users} />} /> 
          <Route path='/signup' element={<RegistrationContainer users = {users} addUser = {addUser} />} />
          <Route path='/video' element={<VideoContainer/>} />
          <Route path='/add' element={<AddVideoContainer />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
