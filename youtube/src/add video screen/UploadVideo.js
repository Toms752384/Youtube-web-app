import React, { useState } from "react";

function UploadVideo({ uploadNewVideo }) {
    //state of preview of the user input
    const [preview, setPreview] = useState(null);

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        setPreview(URL.createObjectURL(file)); // Preview the video using a URL
        uploadNewVideo(file); // Pass the file object
    };
    return (
        <>
            <label htmlFor="upload-input" className="upload-label">Upload your video</label>
            <input type="file" id="upload-input" className="upload-input" onChange={handleVideoChange}/>
            {preview && <video src={preview} alt="Video Preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
        </>

    );
}

export default UploadVideo;
