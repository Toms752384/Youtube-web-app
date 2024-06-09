import React from 'react';
import './SideBar.css';

function SideBar({ videos }) {
    return (
        <div className="col-md-4">
            <div className="sidebar">
                <div className="video-item mb-3 d-flex">
                    <img src="https://i.ytimg.com/vi/zxDUpSP1ZGo/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                    <div className="video-info ml-3">
                        <div className="video-title">Artist</div>
                        <div className="video-title">Video1</div>
                        <div>16M views • 1 year ago</div>
                    </div>
                </div>
                <div className="video-item mb-3 d-flex">
                    <img src="https://i.ytimg.com/vi/3x8hDkp_bT0/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                    <div className="video-info ml-3">
                        <div className="video-title">Artist</div>
                        <div className="video-title">Video2</div>
                        <div>16M views</div>
                    </div>
                </div>
                <div className="video-item mb-3 d-flex">
                    <img src="https://i.ytimg.com/vi/4_g19AdGZ5M/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                    <div className="video-info ml-3">
                        <div className="video-title">Artist</div>
                        <div className="video-title">Video3</div>
                        <div>11M views</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SideBar;