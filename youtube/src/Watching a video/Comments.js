function Comments({comments}) {
    return (
        <div className="comment-section">
            <h4>Comments</h4>
            {comments.map((comment, index) => (
                <div className="comment d-flex mb-3" key={index}>
                    <img src={comment.avatar} alt="User Avatar" width="40" height="40" className="mr-2" />
                    <div className="comment-content">
                        <div className="username">{comment.username}</div>
                        <div className="text">{comment.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;