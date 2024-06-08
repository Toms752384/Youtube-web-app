
function verifyCredentials({ users }){
    //extract the credentials
    var checkUserName = document.getElementById("floatingInput").value;
    var checkPassword = document.getElementById("floatingPassword").value;

    //check username
    //initialize flag 
    var flag = 0;
    var checkUser;
    if(checkUserName === ""){
        alert("enter username!");
        return false;
    }

    for(let user of users){
        if(checkUserName === user.username){
            flag = 1;
            checkUser = user;
        }
    }

    if(flag == 0){
        alert("username is not a member!");
        return false;
    }

    //check password
    if(checkPassword === ""){
        alert("enter password!");
        return false;
    }

    if(checkPassword !== checkUser.password){
        alert("password is not a match!")
        return false;
    }


    //if passed all tests, return true
    return true;
}

export default verifyCredentials;