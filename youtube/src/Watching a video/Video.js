
function Video({ currentVideo }) {
    return (
        <>
            <div className="video-player mb-3">
                <video src={currentVideo.videoUrl} controls width="100%" frameBorder="0" allowFullScreen></video>            </div>
            <h3 className="video-title">{currentVideo.title}</h3>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <img src={currentVideo.avatar} alt="Channel Avatar" className="mr-2" width="50" height="50" />
                    <div>
                        <div>{currentVideo.artist}</div>
                        <div>{currentVideo.subscribers} subscribers</div>
                    </div>
                </div>
                <div className="video-actions">
                    <div className="like-count">
                        <i className="bi bi-hand-thumbs-up"></i>
                        <span>{currentVideo.likes}</span>
                        <i className="bi bi-hand-thumbs-down"></i>
                    </div>
                    <i className="bi bi-share"> Share</i>
                    <i className="bi bi-download"> Download</i>
                    <i className="bi bi-scissors"> Clip</i>
                    <i className="bi bi-three-dots"></i>
                </div>
            </div>
            <div className="descriptin-head">
                {currentVideo.views} views • {currentVideo.time} years ago
            </div>
            <div className="descriptin">
                {currentVideo.description}
            </div>
        </>
    );
}

export default Video;