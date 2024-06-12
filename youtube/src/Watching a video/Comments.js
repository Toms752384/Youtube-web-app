function Comments() {
    return (
        <div className="comment-section">
            <h4>Comments</h4>
            <div className="comment d-flex mb-3">
                <img src="https://yt3.ggpht.com/ytc/AAUvwng-1WPMUNk5YNG_CgK4--wVPqxayqMWAB6PWaN=s88-c-k-c0x00ffffff-no-rj" alt="User Avatar" width="40" height="40" className="mr-2" />
                <div className="comment-content">
                    <div className="username">User1</div>
                    <div className="text">Description</div>
                </div>
            </div>
            <div className="comment d-flex mb-3">
                <img src="https://yt3.ggpht.com/ytc/AAUvwng-2WPMUNk5YNG_CgK4--wVPqxayqMWAB6PWaN=s88-c-k-c0x00ffffff-no-rj" alt="User Avatar" width="40" height="40" className="mr-2" />
                <div className="comment-content">
                    <div className="username">User2</div>
                    <div className="text">Description</div>
                </div>
            </div>
        </div>
    );
}

export default Comments;