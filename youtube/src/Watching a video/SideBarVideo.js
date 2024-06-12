function SideBarVideo({ video }) {
    return (
        <div className="video-item mb-3 d-flex">
            <img src={ video.image } alt="Video Thumbnail" className="img-fluid" />
            <div className="video-info ml-3">
                <div className="video-title">{ video.artist }</div>
                <div className="video-title">{ video.title }</div>
                <div>{ video.views } views • { video.time } years ago </div>
            </div>
        </div>
    );
}

export default SideBarVideo;