import './AddVideoContainer.css';
import videos from "../database/videos.json";
import { useState } from "react";


function AddVideoContainer() {
    // State to manage the list of videos
    const [getVideosList, setVideosList] = useState(videos);

    // Function to add a new video to the list
    const addVideo = () => {
        console.log("hi");
        const newVideo = {
            "text": "newVideo"
        };
        // Update the state with the new video added
        setVideosList([...getVideosList, newVideo]);
    };

    return (
        <>
            <div className="container mt-5 "> {/* Bootstrap container with top margin */}
                {/* Row for the close button positioned at the top-left */}
                <button type="button" className="btn-close position-absolute top-0 start-0 m-3" aria-label="Close"></button>

                <div className="row mb-4"> {/* Row for the page header */}
                    <div className="col">
                        <h2>Upload Video</h2> {/* Page title */}
                    </div>
                </div>

                <div className="row mb-3"> {/* Row for video title input */}
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="videoTitle" className="form-label">Video Title</label> {/* Label for title input */}
                            <input type="text" className="form-control" id="videoTitle" placeholder="Enter video title" /> {/* Input for video title */}
                        </div>
                    </div>
                </div>

                <div className="row mb-3"> {/* Row for video description input */}
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="videoDescription" className="form-label">Video Description</label> {/* Label for description input */}
                            <textarea className="form-control" id="videoDescription" rows="3" placeholder="Enter video description"></textarea> {/* Textarea for video description */}
                        </div>
                    </div>
                </div>

                <div className="row mb-3"> {/* Row for file input */}
                    <div className="col">
                        <label htmlFor="formFile" className="form-label">Choose Video File</label> {/* Label for file input */}
                        <input className="form-control" type="file" id="formFile" /> {/* Input for choosing file */}
                    </div>
                </div>

                <div className="row mb-3"> {/* Row for the upload button */}
                    <div className="col">
                        <button onClick={addVideo} type="button" className="btn btn-primary btn-lg">Upload Video</button> {/* Upload button */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddVideoContainer;