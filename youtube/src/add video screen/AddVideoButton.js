import React from 'react';
import './AddVideoContainer.css'
import { VerifyVideo } from './VerifyNewVideo.js';

function AddVideoButton({ addVideo, videoList, newVideo, currentUser }) {

    //function to handle click on the add video
    const handleAddVideoClick = () => {
        var valid = VerifyVideo({ currentUser, newVideo });
    }

    return (
        <>
            <div className="Dubi">
                <button className="add-button" onClick={handleAddVideoClick}>Add Video</button>
            </div>
        </>
    );
}

export default AddVideoButton;