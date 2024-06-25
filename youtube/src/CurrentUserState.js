import { useState, useEffect } from 'react';

export const CurrentUserState = () => {
    //state of currently logged in user
    const defualtUser = { "username": "username", "password": "", "nickname": "nickname", "avatar": "/localPhotos/defualtAvatar.png" };
    const [currentUser, setCurrentUser] = useState(defualtUser);
    const handleLogin = (loggedInUser) => {
        setCurrentUser(loggedInUser);
    };
    return {defualtUser, currentUser, setCurrentUser, handleLogin};
};