function ProfileDetails({ currentVideo }) {
    return (
        <>
            <div className="d-flex align-items-center">
                <img src={currentVideo.avatar} alt="Channel Avatar" className="mr-2" width="50" height="50" />
                <div>
                    <div>{currentVideo.artist}</div>
                    <div>{currentVideo.subscribers} subscribers</div>
                </div>
            </div>
            <div>
                <b>Welcome to {currentVideo.artist}'s profile page!</b>
            </div>
        </>
    );
}

export default ProfileDetails;