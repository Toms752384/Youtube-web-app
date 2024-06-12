import React from 'react';
import './SideBar.css';
import SideBarVideo from './SideBarVideo.js';

function SideBar({ videosList }) {

    const videoList = videosList.map((video, key) => {
        return <SideBarVideo video = {video} key = {key} />
    });

    return (
        <div className="col-md-4">
            <div className="sidebar">
                {videoList}
            </div>
        </div>
    );
}

export default SideBar;