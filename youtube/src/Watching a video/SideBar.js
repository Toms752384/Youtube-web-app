import React from 'react';
import './SideBar.css';
import SideBarVideo from './SideBarVideo.js';

function SideBar({ vi }) {

    const videos = [{artist: "this", title: "a", views: "12", time: "3"},
        {artist: "this!", title: "a", views: "12", time: "3"}, 
        {artist: "this?", title: "a", views: "12", time: "3"},
        {artist: "this!?", title: "a", views: "12", time: "3"}]

    const videoList = videos.map((video, key) => {
        return <SideBarVideo {...video} key = {key} />
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