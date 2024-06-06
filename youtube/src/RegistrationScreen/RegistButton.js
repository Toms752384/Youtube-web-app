import React, { useState } from 'react';
import confetti from 'canvas-confetti';

function RegistButton() {
  //handle a local of users
  const [users, setUsers] = useState([]);

  //handle on click
  const handleClick = () => {
    var valid = verifyRegistration();
    if (valid) {
      const newUser = createNewUser();
      console.log(users);
      if (isUniqueUser(newUser)) {
        setUsers([...users, newUser]);
        confetti();
      }
    };
  };

  //function to create new user
  const createNewUser = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("floatingPassword").value;
    var nickname = document.getElementById("nickname").value;
    return { username, password, nickname };
  };

  //function to check if user is unique
  const isUniqueUser = (newUser) => {
    for (let user of users) {
      if (user.userName === newUser.username) {
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
    //register button
    <div className="Dubi">
      <button className="confetti-button" onClick={handleClick}>Sign Up</button>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    </div>
  );
}

export default RegistButton;

function verifyRegistration(users) {
  // extract strings
  var userName = document.getElementById("username").value;
  var password = document.getElementById("floatingPassword").value;
  var password2 = document.getElementById("floatingPassword2").value;
  var nickname = document.getElementById("nickname").value;

  // verify username - store the return value of verifyUsername in a variable
  if (verifyUsername(userName, users) === false) {
    alert("enter new username!");
    return false;
  }

  // verify password
  if (verifyPassword(password) === false) {
    alert("password invalid!");
    return false;
  }

  //verify password in entered again
  if (password != password2) {
    alert("enter password again for verification!");
    return false;
  }

  //check nickname
  if (verifyNickname(nickname) === false) {
    alert("enter nickname!")
  }

  // if finished all tests, return true
  return true;
}

//function to verify username
function verifyUsername(userName, users) {
  //check if username is valid
  if (userName === "") {
    return false;
  }

  return true;
}

//function to verify that a password is valid
function verifyPassword(str) {
  //make sure is a string
  if (typeof str !== "string") {
    return false;
  }

  //make sure is 8 characters long
  if (str.length < 8) {
    return false;
  }

  //constst to check regular expression
  const hasNumber = /[0-9]/;
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
  const hasUpperLetter = /[A-Z]/;
  const hasLowerLetter = /[a-z]/;

  //check if the string contains at least one number
  if (!hasNumber.test(str)) {
    return false;
  }

  //check if the string contains at least one symbol
  if (!hasSymbol.test(str)) {
    return false;
  }

  //check if the string contains at least one uppercase English letter
  if (!hasUpperLetter.test(str)) {
    return false;
  }

  //check if the string contains at least one lowercase English letter
  if (!hasLowerLetter.test(str)) {
    return false;
  }


  //if all conditions are met, return true
  return true;
}

//function to verify nickname
function verifyNickname(nickname) {
  if (nickname === "") {
    return false;
  }
  return true;
}