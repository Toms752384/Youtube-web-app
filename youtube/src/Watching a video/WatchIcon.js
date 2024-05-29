import React from "react";
import './Video.css';

function WatchIcon() {
    return (
        <div className="d-flex align-items-center">
            <i className="bi bi-list text-white mr-3" style={{ fontSize: '1.5rem' }}></i>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo" />
        </div>
    );
}

export default WatchIcon;