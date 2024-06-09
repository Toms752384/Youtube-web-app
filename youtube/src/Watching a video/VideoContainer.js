import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Video.css';
import IconsLeft from './IconsLeft';
import WatchSearchBar from './WatchSearchBar';
import IconsRight from './IconsRight';
import SideBar from './SideBar';
import MainBody from './MainBody';

function VideoContainer() {
    return (
        <>
            <header className="header d-flex justify-content-between align-items-center">
                <IconsLeft />
                <WatchSearchBar />
                <IconsRight />
            </header>
            <div className="container-fluid mt-4">
                <div className="row">
                    <MainBody/>
                    <SideBar/>
                </div>
            </div>
        </>
    );
}

export default VideoContainer;