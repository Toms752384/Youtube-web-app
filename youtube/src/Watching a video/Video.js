import { useState, useEffect, useRef } from "react";

function Video({ currentVideo, currentUser, deleteVideo }) {
    // state of like button
    const [likeButton, setLikeButton] = useState(false);

    // state of three dots
    const [ThreeDots, setThreeDots] = useState(false);

    //useref element
    const menuRef = useRef(null);

    //useref function
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setThreeDots(false);
        }
    };

    //listener function
    useEffect(() => {
        if (ThreeDots) {
            //add a slight delay before adding the event listener to prevent immediate closing
            const timer = setTimeout(() => {
                document.addEventListener("click", handleClickOutside);
            }, 0);

            //clean up the timeout if the component unmounts or ThreeDots changes
            return () => clearTimeout(timer);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ThreeDots]);

    // function to handle like click
    const handleLikeClick = () => {
        setLikeButton(!likeButton);
    };

    // function to handle share click
    const handleShare = () => {
        const shareData = {
            title: currentVideo.title,
            text: `Check out this video: ${currentVideo.title}`,
            url: currentVideo.videoUrl,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Video shared successfully!'))
                .catch((error) => console.log('Error sharing video:', error));
        } else {
            // if browser does not support this action
            alert('Web Share API is not supported in your browser. Please copy the link manually.');
            console.log('Share data:', shareData);
        }
    };

    // function to handle three dots click
    const handleThreeDotsClick = (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (currentUser.username === "username") {
            alert("You need to log in to edit videos!");
            return;
        }
        setThreeDots(!ThreeDots);
    };

    //function to handle delete function
    const handleDeleteVidClick = () => {
        deleteVideo(currentVideo.videoUrl);
    }

    // function to handle download click
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = currentVideo.videoUrl;
        link.download = currentVideo.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="video-player mb-3">
                <video src={currentVideo.videoUrl} controls width="100%" frameBorder="0" allowFullScreen></video>
            </div>
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
                    <div className="like-count" onClick={handleLikeClick}>
                        <i className={likeButton ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}></i>
                        <span>{currentVideo.likes}</span>
                    </div>
                    <i className="bi bi-share" onClick={handleShare}> Share</i>
                    <i className="bi bi-download" onClick={handleDownload}> Download</i>
                    <i className="bi bi-three-dots" onClick={handleThreeDotsClick}></i>
                    {ThreeDots && (
                        <div className="options-menu" ref={menuRef}>
                            <ul>
                                <li>Edit video</li>
                                <li onClick={handleDeleteVidClick}>Delete video</li>
                            </ul>
                        </div>
                    )}
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
