import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './IconsRight.css';

function IconsRight({ currentUser, defualtUser, handleSignOut }) {
    //useState of the avatar menu
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    //state for theme //need to debut
    const [isDarkTheme, setIsDarkTheme] = useState(true); 

    //function to change theme //need to debut
    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };

    //function to open and close avatar menu
    const handleAvatarClick = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    //function to navigate to add new video page
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/add');
    };

    //function to navigate to sign in page
    const handnleSignInClick = () => {
        navigate('/');
    };

    //function to navigate to sign up page
    const handleRegisterClick = () => {
        navigate('/signup');
    };

    //function to sign out
    const handleSignOutClick = () => {
        handleSignOut(defualtUser);
    }
    return (
        <div className="d-flex align-items-center position-relative">
            <i className="bi bi-camera-video text-white mx-2 button-like" onClick={handleButtonClick} style={{ fontSize: '1.5rem' }}></i>
            <i className="bi bi-bell text-white mx-2 button-like" style={{ fontSize: '1.5rem' }} ></i>
            <div className="avatar mx-2" onClick={handleAvatarClick}>
                <img src={currentUser.avatar} alt="Avatar" />
            </div>
            {isOptionsOpen && (
                <div className="options-menu">
                    <ul>
                        <li>Hello {currentUser.nickname}!</li>
                        <li onClick={handnleSignInClick}>Sign in</li>
                        <li onClick={handleRegisterClick}>Join us</li>
                        <li onClick={handleSignOutClick}>Sign out</li>
                        <li onClick={handleThemeChange}>Change Theme</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default IconsRight;