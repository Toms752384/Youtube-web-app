import './AddVideoContainer.css';
import Logo from './logo.png';
import AddVideoForm from './AddVideoForm.js'
import AddVideoButton from './AddVideoButton.js';
import AddVideoLogo from './AddVideoLogo.js';
import UploadVideo from './UploadVideo.js';
import UploadImage from './UploadImage.js';

//adding a new new design: user should enter title, description and upload a video. adding an image is optional -
//if he didn't upload, then he would get the logo
//the artist and avatar would be received from the user that uploaded it (need to make it permanent and not change when user changes!)
//views will be 0, likes will be 0, time wil be 0, subscribers will be (to be continued) comments will be an empty list

function AddVideoContainer() {
    return (
        <>
            <div className="container-rec">
                <div className="inner-container form-container">
                    <AddVideoForm/>
                    <AddVideoButton/>
                </div>
                <div className="image-container">
                    <AddVideoLogo/>
                    <UploadVideo/>
                    <UploadImage/>
                </div>
            </div>
        </>
    );
}

export default AddVideoContainer;
