import verifyCredentials from "./verifyCredentials";

function LoginButton({ users, onLogin }) {
    //verify credentials
    const handleClick = () => {
        var loggedInUser = verifyCredentials({ users });
        //log in
        if(loggedInUser !== null){
            onLogin(loggedInUser);
            //add going to home page
        }
    }
    return (
        <div className="form-floating mb-3 text-center">
            <button type="button" className="btn btn-danger" onClick={handleClick}>
                Sign In
            </button>
        </div>
    );
}

export default LoginButton;
