function SideBarVideo({ image, video, artist, title, views, time }) {
    return (
        <div className="video-item mb-3 d-flex">
            <img src={ image } alt="Video Thumbnail" className="img-fluid" />
            <div className="video-info ml-3">
                <div className="video-title">{ artist }</div>
                <div className="video-title">{ title }</div>
                <div>{ views } views • { time } </div>
            </div>
        </div>
    );
}

export default SideBarVideo;