import { useNavigate } from 'react-router-dom';

function SideBarVideo({ video, changeVideo }) {
    const navigate = useNavigate();

    //function to handle click on a video element
    const handleClick = () => {
        changeVideo(video);
        navigate('/video');
    }

    return (
        <div className="video-item mb-3 d-flex" onClick = {handleClick}>
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