import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Watching a video/Video.css';
import IconsLeft from '../Watching a video/IconsLeft';
import WatchSearchBar from '../Watching a video/WatchSearchBar';
import IconsRight from '../Watching a video/IconsRight';
import HomeVideosList from './HomeVideosList';

function HomeContainer({ videosList, currentVideo, changeVideo, currentUser, defualtUser, handleSignOut, updateComments, deleteVideo, updateVideoDetails }) {
    return(
        <>
         <header className="header d-flex justify-content-between align-items-center">
                <IconsLeft currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut}/>
                <WatchSearchBar />
                <IconsRight currentUser={currentUser} defualtUser={defualtUser} handleSignOut={handleSignOut} /> 
            </header>
            <div className="container-fluid mt-4">
                <div className="row">
                    <HomeVideosList videosList={ videosList } changeVideo={changeVideo}/>
                </div>
            </div>
        </>
    );
}

export default HomeContainer;