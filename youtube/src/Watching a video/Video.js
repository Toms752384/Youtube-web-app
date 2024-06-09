function Video() {
    return (
        <>
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
        </>
    );
}

export default Video;