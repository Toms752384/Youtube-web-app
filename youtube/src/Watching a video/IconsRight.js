import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './IconsRight.css';

function IconsRight() {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleAvatarClick = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    return (
        <div className="d-flex align-items-center position-relative">
            <i className="bi bi-camera-video text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
            <i className="bi bi-bell text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
            <div className="avatar mx-2" onClick={handleAvatarClick}>
                <img src="path_to_your_avatar_image" alt="Avatar" />
            </div>
            {isOptionsOpen && (
                <div className="options-menu">
                    <ul>
                        <li>Sign in</li>
                        <li>Join us</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default IconsRight;
