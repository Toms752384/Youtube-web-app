import React from "react";

function RegistUpload() {
    return(
        <div className="upload-container">
          <label htmlFor="upload-input" className="upload-label">Upload Profile Picture</label>
          <input type="file" id="upload-input" className="upload-input" />
        </div>
    );
}

export default RegistUpload;