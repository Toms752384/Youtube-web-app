import { useNavigate } from 'react-router-dom';

function SideBarVideo({ video, changeVideo }) {
    const navigate = useNavigate();

    //function to handle click on a video element
    const handleClick = () => {
        changeVideo(video);
        console.log(video.avatar);
        navigate('/video');
    };

    //function to display date in dd/mm/yy format
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
      };

    return (
        <div className="video-item mb-3 d-flex" onClick={handleClick}>
            <video
                src={video.videoUrl}
                className="img-fluid"
                preload="metadata"
                onLoadedMetadata={e => {
                    e.currentTarget.currentTime = 5;
                }}
            >
                Your browser does not support the video tag.
            </video>
            <div className="video-info ml-3">
                <div className="video-title">{video.title}</div>
                <div className="video-title">{video.artist}</div>
                <div>{video.views} views • {formatDate(video.time)} </div>
            </div>
        </div>
    );
}

export default SideBarVideo;