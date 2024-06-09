import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FloatingMenu.css';

function FloatingMenu({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="floating-menu">
            <div className="menu-content">
                <button className="close-button" onClick={onClose}>×</button>
                <ul className="menu-list">
                    <li><i className="bi bi-house-door-fill"></i> Home</li>
                    <li><i className="bi bi-play-btn-fill"></i> Shorts</li>
                    <li><i className="bi bi-collection-play-fill"></i> Subscriptions</li>
                    <li><i className="bi bi-music-note-beamed"></i> YouTube Music</li>
                    <li><i className="bi bi-person-circle"></i> Your channel</li>
                    <li><i className="bi bi-clock-history"></i> History</li>
                    <li><i className="bi bi-journal-album"></i> Playlists</li>
                    <li><i className="bi bi-play-circle"></i> Your videos</li>
                    <li><i className="bi bi-clock"></i> Watch later</li>
                    <li><i className="bi bi-hand-thumbs-up"></i> Liked videos</li>
                    <li><i className="bi bi-download"></i> Downloads</li>
                </ul>
            </div>
        </div>
    );
}

export default FloatingMenu;
