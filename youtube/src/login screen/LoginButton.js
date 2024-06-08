import verifyCredentials from "./verifyCredentials";

function LoginButton({ users }) {
    //define a hadle click function that does a few things:
    //if verifyCredentials is true, then update current user to be the user entred, and move to home page (add later)
    const handleClick = () => {
        var valid = verifyCredentials({ users });
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