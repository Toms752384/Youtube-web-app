import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Watching a video/Video.css';
import IconsLeft from '../Watching a video/IconsLeft';
import WatchSearchBar from '../Watching a video/WatchSearchBar';
import IconsRight from '../Watching a video/IconsRight';
import ProfileDetails from './ProfileDetails';
import HomeVideosList from '../Home page/HomeVideosList';

function ProfileContainer({ videosList, currentVideo, changeVideo, currentUser, defualtUser, handleSignOut, handleDeleteUser, updateComments, deleteVideo, updateVideoDetails, searchQuery, handleSearch }) {
    //filter list of videos using the currentVideo artist
    const filteredVideosList = videosList.filter(video =>
        video.artist.includes(currentVideo.artist)
    );
    return (
        <>
            <header className="header d-flex justify-content-between align-items-center">
                <IconsLeft currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut} handleDeleteUser={handleDeleteUser} />
                <WatchSearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
                <IconsRight currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut} />
            </header>
            <div className="container-fluid mt-4">
                <div className="row">
                    <ProfileDetails currentVideo={currentVideo}/>
                    <HomeVideosList videosList={filteredVideosList} changeVideo={changeVideo} />
                </div>
            </div>
        </>
    );
}

export default ProfileContainer;