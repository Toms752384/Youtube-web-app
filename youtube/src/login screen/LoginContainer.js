import React from 'react';
import Logo from './Logo.js'
import LoginForm from './LoginForm.js'
import MoveToRegistration from './MoveToRegistration.js';
import './Login.css';

function LoginContainer({ users }) {
  return (
    <div className="container form-container">
      <div className="rectangle">
        <Logo></Logo>
        <LoginForm user = { users }></LoginForm>
        <MoveToRegistration></MoveToRegistration>
      </div>
    </div>
  );
}

export default LoginContainer;
