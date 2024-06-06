import React from "react";
import './DesignRegist.css';

//verify that a password is valid
function isValidPassword(str) {
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
  const hasLetter = /[a-zA-Z]/;

  //check if the string contains at least one number
  if (!hasNumber.test(str)) {
    return false;
  }

  //check if the string contains at least one symbol
  if (!hasSymbol.test(str)) {
    return false;
  }

  //check if the string contains at least one English letter
  if (!hasLetter.test(str)) {
    return false;
  }

  //if all conditions are met, return true
  return true;
}

function RegistForm() {
  return (
    <div>
      {/* enter username */}
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Username</label>
      </div>
      {/* enter password */}
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        Password must be 8 characters long, and contain numbers, English letters, uppercase letters and symbols.
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {/* password verification */}
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword2" placeholder="Password" />
        <label htmlFor="floatingPasswor">Password verification</label>
      </div>
      {/* Nickname */}
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Nickname</label>
        {/* text */}
      </div>
      Signing up constitutes your agreement to our terms, privacy policy, and cookies policy.
    </div>
  );

}

export default RegistForm;