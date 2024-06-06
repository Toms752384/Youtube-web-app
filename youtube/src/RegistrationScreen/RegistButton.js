import React from 'react';
import confetti from 'canvas-confetti';

function RegistButton() {
  const handleClick = () => {
    var valid = verifyRegistration();
    if(valid){
      confetti()
    };
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

function verifyRegistration() {
  // extract strings
  var userName = document.getElementById("username").value;
  var password = document.getElementById("floatingPassword").value;
  var password2 = document.getElementById("floatingPassword2").value;
  var nickname = document.getElementById("nickname").value;

  // verify username - store the return value of verifyUsername in a variable
  if(verifyUsername(userName) === false){
    alert("enter username!");
    return false;
  }

  // verify password
  if(verifyPassword(password) === false){
    alert("password invalid!");
    return false;
  }

  //verify password in entered again
  if(password != password2){
    alert("enter password again for verification!");
    return false;
  }

  //check nickname
  if(verifyNickname(nickname) === false){
    alert("enter nickname!")
  }

  // if finished all tests, return true
  return true;
}

//function to verify username
function verifyUsername(userName){
  //check if valid
  if(userName === ""){
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
  if(nickname === "") {
      return false;
  }
  return true;
}