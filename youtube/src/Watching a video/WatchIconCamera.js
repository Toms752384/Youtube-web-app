import React from "react";
import './Video.css';

function WatchIconCamera() {
    return (
        <div className="d-flex align-items-center">
            <i className="bi bi-camera-video text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
            <i className="bi bi-bell text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
        </div>
    );
}

export default WatchIconCamera;