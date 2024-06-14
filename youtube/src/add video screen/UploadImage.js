function UploadImage() {
    return (
        <>
            <label htmlFor="upload-input" className="upload-label">Upload a preview image - optional</label>
            <input type="file" id="upload-input-img" className="upload-input" />
        </>

    );
}

export default UploadImage;
