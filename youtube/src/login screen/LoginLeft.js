import React from 'react';

function LoginLeft() {
  return (
    <>
      <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
        {/* Big Text */}
        <div className="mb-4">
          <h1 className="display-4">Sign In</h1>
        </div>

        {/* Small Text */}
        <div id="Usernamehelp" className="form-text">
            Not a member? Sign Up now!
          </div>
          
        {/* Button */}
        <div>
          <button type="button" className="btn btn-red btn-lg">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default LoginLeft;


