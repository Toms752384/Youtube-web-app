import React from 'react';
import Logo from './Logo.png'
function LoginContainer() {
  return (
    <div className="container form-container">
      <div className="rectangle">
        <img src={Logo} alt="Logo" className="my-image" />
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
          <div className="form-text text-center">
            Password must be at least 8 characters long, and contain numbers,
            english letters and symbols.
          </div>
        </div>
        <div className="form-floating mb-3 text-center">
          <button type="button" className="btn btn-danger">
            Sign In
          </button>
        </div>
        <div className="form-text mb-3 text-center">
          Not a member yet? Sign up today!
        </div>
        <div className="form-floating mb-3 text-center">
          <button type="button" className="btn btn-danger">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
