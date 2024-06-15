import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FloatingMenu.css';

function FloatingMenu({ isOpen, onClose, currentUser }) {
    if (!isOpen) return null;

    return (
        <div className="floating-menu">
            <div className="menu-content">
                <button className="close-button" onClick={onClose}>×</button>
                <ul className="menu-list">
                    <li><i>Profile</i></li>
                    <li><i className="bi bi-person-circle"></i> Username</li>
                    <li><i className="bi bi-person-raised-hand"></i> Nickname</li>
                    <li><i>Actions</i></li>
                    <li><i className="bi bi-box-arrow-in-right"></i> Log in</li>
                    <li><i className="bi bi-box-arrow-in-left"></i> Log out</li>
                    <li><i className="bi bi-download"></i> Upload video</li>
                    <li><i className="bi bi-moon-stars-fill"></i> Change mode</li>
                    <li><i>Help and more</i></li>
                    <li><i className="bi bi-question-circle"></i> Help</li>
                    <li><i className="bi bi-gear"> Settings</i></li>
                </ul>
            </div>
        </div>
    );
}

export default FloatingMenu;
