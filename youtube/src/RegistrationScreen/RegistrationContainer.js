
import React from 'react';
import confetti from 'canvas-confetti';
import './DesignRegist.css';
import logo from '../login screen/YouTube-Logo-removebg-preview.png';
import RegistForm from './RegistForm';
import RegistButton from './RegistButton';
import RegistLogo from './RegistLogo';
import RegistUpload from './RegistUpload';
import RegistLoginButton from './RegistLoginButton';


function RegistrationContainer() {
    return(
      <div className="container-rec">
      <div className="inner-container form-container">
        <RegistForm/>
        <RegistButton/>
      </div>
      <div className="image-container">
        <RegistLogo/>
        <RegistUpload/>
        <RegistLoginButton/>
      </div>
    </div>
  );
}

export default RegistrationContainer;