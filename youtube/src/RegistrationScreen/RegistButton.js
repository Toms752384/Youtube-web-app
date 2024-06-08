import React from 'react';
import confetti from 'canvas-confetti';
import { verifyRegistration } from './validation.js';

function RegistButton({ users, addUser }) {
  const handleClick = () => {
    var valid = verifyRegistration(users);
    if (valid) {
      const newUser = createNewUser();
      if (isUniqueUser(newUser)) {
        addUser(newUser);
        confetti();
      }
    };
  };

  const createNewUser = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("floatingPassword").value;
    var nickname = document.getElementById("nickname").value;
    return { username, password, nickname };
  };

  const isUniqueUser = (newUser) => {
    for (let user of users) {
      if (user.username === newUser.username) {
        alert("Username already taken!");
        return false;
      }
      if (user.password === newUser.password) {
        alert("Password already used by another user!");
        return false;
      }
      if (user.nickname === newUser.nickname) {
        alert("Nickname already taken!");
        return false;
      }
    }
    return true;
  };

  return (
    <div className="Dubi">
      <button className="confetti-button" onClick={handleClick}>Sign Up</button>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    </div>
  );
}

export default RegistButton;