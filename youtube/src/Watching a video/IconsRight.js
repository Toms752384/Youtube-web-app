import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './IconsRight.css';

function IconsRight() {
    //useState of the avatar menu
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    //function to open and close avatar menu
    const handleAvatarClick = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    //function to navigate to login page
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/add');
    };

    return (
        <div className="d-flex align-items-center position-relative">
            <i className="bi bi-camera-video text-white mx-2 button-like" onClick={ handleButtonClick } style={{ fontSize: '1.5rem' }}></i>
            <i className="bi bi-bell text-white mx-2 button-like" style={{ fontSize: '1.5rem' }} ></i>
            <div className="avatar mx-2" onClick={ handleAvatarClick }>
                <img src="path_to_your_avatar_image" alt="Avatar" />
            </div>
            {isOptionsOpen && (
                <div className="options-menu">
                    <ul>
                        <li>Sign in</li>
                        <li>Join us</li>
                        <li>Sign out</li>
                        <li>Change theme</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default IconsRight;
