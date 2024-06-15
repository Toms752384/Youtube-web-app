import React from 'react';
import './AddVideoContainer.css'

function AddVideoButton({addVideo, videoList, newVideo}) {
    return (
        <>
            <div className="Dubi">
                <button className="add-button">Add Video</button>
            </div>
        </>
    );
}

export default AddVideoButton;