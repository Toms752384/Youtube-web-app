
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
  //local list of users to access from across the program, and add a new user function
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  //local currently logged in user - defualt value is null, and handle login function
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser);
    console.log(currentUser);
  };

  //app to run
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginContainer users = { users } onLogin = { handleLogin }/>} /> 
          <Route path='/signup' element={<RegistrationContainer users = { users } addUser = { addUser } />} />
          <Route path='/video' element={<VideoContainer/>} />
          <Route path='/add' element={<AddVideoContainer />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
