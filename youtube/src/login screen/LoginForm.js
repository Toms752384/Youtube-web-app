import React from 'react';

function LoginForm() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className='Form-move-right'>
                <div className="mb-3">
                    <label htmlFor="exampleUsername" className="form-label">
                        Username
                    </label>
                    <input
                        type="Username"
                        className="form-control"
                        id="exampleUsername"
                        aria-describedby="Usernamehelp"
                    />
                    <div id="Usernamehelp" className="form-text">
                        This field is mandatory.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    <div id="Usernamehelp" className="form-text">
                        This field is mandatory.
                    </div>
                    <div id="Usernamehelp" className="form-text">
                        Password must be 8 characters long, and contain numbers, english letters, uppercase letters and symbols.
                    </div>
                </div>
                <button type="submit" className="btn btn-red">
                    Log in
                </button>
            </form>
        </div>


    );
}

export default LoginForm;