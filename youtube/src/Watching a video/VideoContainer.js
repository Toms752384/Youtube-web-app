import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Video.css';

function VideoContainer() {
    return (
        <>
            <header className="header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <i className="bi bi-list text-white mr-3" style={{ fontSize: '1.5rem' }}></i>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo" />
                </div>
                <div className="search-bar flex-grow-1 d-flex justify-content-center">
                    <input type="text" className="form-control" placeholder="Search" style={{ maxWidth: '400px' }} />
                </div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-camera-video text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
                    <i className="bi bi-bell text-white mx-2" style={{ fontSize: '1.5rem' }}></i>
                </div>
            </header>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="video-player mb-3">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <h3 className="video-title">Title</h3>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex align-items-center">
                                <img src="https://yt3.ggpht.com/ytc/AAUvwng-3_WPMUNk5YNG_CgK4--wVPqxayqMWAB6PWaN=s88-c-k-c0x00ffffff-no-rj" alt="Channel Avatar" className="mr-2" width="50" height="50" />
                                <div>
                                    <div>Artist</div>
                                    <div>16.7M subscribers</div>
                                </div>
                            </div>
                            <div className="video-actions">
                                <div className="like-count">
                                    <i className="bi bi-hand-thumbs-up"></i>
                                    <span>8.7K</span>
                                    <i className="bi bi-hand-thumbs-down"></i>
                                </div>
                                <i className="bi bi-share"> Share</i>
                                <i className="bi bi-download"> Download</i>
                                <i className="bi bi-scissors"> Clip</i>
                                <i className="bi bi-three-dots"></i>
                            </div>
                        </div>
                        <div className="comment-section">
                            <h4>Comments</h4>
                            <div className="comment d-flex mb-3">
                                <img src="https://yt3.ggpht.com/ytc/AAUvwng-1WPMUNk5YNG_CgK4--wVPqxayqMWAB6PWaN=s88-c-k-c0x00ffffff-no-rj" alt="User Avatar" width="40" height="40" className="mr-2" />
                                <div className="comment-content">
                                    <div className="username">User1</div>
                                    <div className="text">Description</div>
                                </div>
                            </div>
                            <div className="comment d-flex mb-3">
                                <img src="https://yt3.ggpht.com/ytc/AAUvwng-2WPMUNk5YNG_CgK4--wVPqxayqMWAB6PWaN=s88-c-k-c0x00ffffff-no-rj" alt="User Avatar" width="40" height="40" className="mr-2" />
                                <div className="comment-content">
                                    <div className="username">User2</div>
                                    <div className="text">Description</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar">
                            <div className="video-item mb-3">
                                <img src="https://i.ytimg.com/vi/zxDUpSP1ZGo/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                                <div className="video-title mt-2">Video1</div>
                                <div>16M views • 1 year ago</div>
                            </div>
                            <div className="video-item mb-3">
                                <img src="https://i.ytimg.com/vi/3x8hDkp_bT0/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                                <div className="video-title mt-2">Video2</div>
                                <div>16M views</div>
                            </div>
                            <div className="video-item mb-3">
                                <img src="https://i.ytimg.com/vi/4_g19AdGZ5M/hqdefault.jpg" alt="Video Thumbnail" className="img-fluid" />
                                <div className="video-title mt-2">Video3</div>
                                <div>11M views</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap JS and dependencies */}
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}

export default VideoContainer;