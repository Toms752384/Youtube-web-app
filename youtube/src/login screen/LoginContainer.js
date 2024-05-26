import React from 'react';
import LoginForm from './LoginForm';
import LoginLeft from './LoginLeft';
import LoginLogo from './LoginLogo';
import logo from './logo.png'

function LoginContainer() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex justify-content-between align-items-center">
          <LoginLeft />
          <LoginForm />
        </div>
      </div>
      <div>
        <div className="mb-1">
          <img src={logo} className="small-image" alt="YouTube Logo" />
        </div>
      </div>
    </>
  );
}

export default LoginContainer;
