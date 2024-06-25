import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Watching a video/Video.css';
import IconsLeft from '../Watching a video/IconsLeft';
import WatchSearchBar from '../Watching a video/WatchSearchBar';
import IconsRight from '../Watching a video/IconsRight';
import ProfileDetails from './ProfileDetails';

function ProfileContainer({ videosList, currentVideo, changeVideo, currentUser, defualtUser, handleSignOut, updateComments, deleteVideo, updateVideoDetails, searchQuery, handleSearch }) {
    return (
        <>
            <header className="header d-flex justify-content-between align-items-center">
                <IconsLeft currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut} />
                <WatchSearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
                <IconsRight currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut} />
            </header>
            <div className="container-fluid mt-4">
                <div className="row">
                    <ProfileDetails currentVideo={currentVideo}/>
                    <div>
                        add filtered videos here
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileContainer;