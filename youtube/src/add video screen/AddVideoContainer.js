import './AddVideoContainer.css';
import Logo from './logo.png';
import AddVideoForm from './AddVideoForm.js'
import AddVideoButton from './AddVideoButton.js';
import AddVideoLogo from './AddVideoLogo.js';
import UploadVideo from './UploadVideo.js';
import UploadImage from './UploadImage.js';
import { useState } from 'react';

function AddVideoContainer({addVideo, videoList, currentUser}) {
    //state of newVideo
    const [newVideo, setNewVideo] = useState(null);

    //state of new display image
    const [newDisplayImage, setNewDisImage] = useState('./localPhotos/stamLogo.png');

    //function to add the video to the state
    const uploadNewVideo = (newVideo) => {
        setNewVideo(newVideo);
    }

    // //function to add the image to the state
    // const uploadNewDisImage = (newDisplayImage) => {
    //     setNewDisImage(newDisplayImage);
    // }

    return (
        <>
            <div className="container-rec">
                <div className="inner-container form-container">
                    <AddVideoForm/>
                    <AddVideoButton addVideo={addVideo} videoList={videoList} newVideo={newVideo} currentUser={currentUser} displayImage={newDisplayImage}/>
                </div>
                <div className="image-container">
                    <AddVideoLogo/>
                    <UploadVideo uploadNewVideo={uploadNewVideo}/>
                </div>
            </div>
        </>
    );
}

export default AddVideoContainer;

//feature of adding a new video

//first step - adding relevent states
//send addVideo function, videoList, from App.js to AddVideoButton (through container) - done
//create state of video and DisplayImage in container, and send to AddVideoButton (video, DisplayImage) - done
//create two function handleDisplayImageUpload, handleVideoUpload connected to the states and send to the relevent upload components - done
//create states inside UploadImage and UploadVideo and onChange functions to handle preview of the uploads - done (image not)

//second step - verification of fields - done
//create a validation.js to validate fields and validate user is logged in (send currentUser as an argument, and get all elements from the document)
//create an onclick function on the add video button to check the field - call the function above

//third step - creating and adding the new video
//create a function that creates a new video (getElementById and that, and creates a video object)
// and then another function to navigate back to home page(video page for now)
//create an on click function on the button of add video, that calls the function that verifies the input, and then calls the


