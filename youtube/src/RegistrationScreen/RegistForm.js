import React from "react";
import './DesignRegist.css';

function RegistForm(){
    return(
        <div>
            <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          Password must be 8 characters long, and contain numbers, English letters, uppercase letters and symbols.
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPasswor" placeholder="Password" />
          <label htmlFor="floatingPasswor">Password verification</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Nickname</label>
        </div>
        Signing up constitutes your agreement to our terms, privacy policy, and cookies policy.
        </div>
    );

}

export default RegistForm;