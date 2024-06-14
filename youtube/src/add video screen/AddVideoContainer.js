import './AddVideoContainer.css';
import Logo from './logo.png';
import AddVideoForm from './AddVideoForm.js'
//adding a new new design: user should enter title, description and upload a video. adding an image is optional -
//if he didn't upload, then he would get the logo
//the artist and avatar would be received from the user that uploaded it (need to make it permanent and not change when user changes!)
//views will be 0, likes will be 0, time wil be 0, subscribers will be (to be continued) comments will be an empty list

//structure of the page: same as register:
//AddVideoContainer: AddVideoForm, AddVideoButton, AddVideoLogo, UploadImage, UploadVideo

function AddVideoContainer() {

    return (
        <>
            <div className="container-rec">
                <div className="inner-container form-container">
                    <AddVideoForm/>
                    {/* <RegistButton users={users} addUser={addUser} avatar={avatar} /> */}
                </div>
                <div className="image-container">
                    {/* <RegistLogo /> */}
                    {/* <RegistUpload imageUpload={handleImageUpload} /> */}
                </div>
            </div>
        </>
    );
}

export default AddVideoContainer;
