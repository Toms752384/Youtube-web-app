import React, { useState } from 'react';

function Comments({ comments, currentUser, addComment, deleteComment }) {
    //state of the edit choice
    const [isEditOpen, setEditOpen] = useState(false);

    //state of open comment Id
    const [openCommentId, setOpenCommentId] = useState(null);
    
    //state of a new comment
    const [newComment, setNewComment] = useState('');

    //state of adding or not a new comment
    const [isAddingComment, setIsAddingComment] = useState(false);

    //function to change state of edit option
    const handleThreeDotsClick = (index) => {
        setOpenCommentId(openCommentId === index ? null : index);
    }

    //adding a new comment function
    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            addComment({
                username: currentUser.username,
                avatar: currentUser.avatar,
                text: newComment
            });
            setNewComment('');
            setIsAddingComment(false);
        }
    };

    //click on cancel function that closes the new comment
    const handleCancelComment = () => {
        setNewComment('');
        setIsAddingComment(false);
    };

    return (
        <div className="comment-section">
            <h4>Comments</h4>
            <div className="new-comment-section">
                <div className="new-comment-input d-flex mb-3">
                    <img src={currentUser.avatar} alt="User Avatar" width="40" height="40" className="mr-2" />
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        onFocus={() => setIsAddingComment(true)}
                    />
                </div>
                {isAddingComment && (
                    <div className="new-comment-actions d-flex justify-content-end mt-2">
                        <button onClick={handleCancelComment} className="btn btn-secondary mr-2">Cancel</button>
                        <button onClick={handleAddComment} className="btn btn-primary">Comment</button>
                    </div>
                )}
            </div>
            {comments.map((comment, index) => (
                <div className="comment d-flex mb-3" key={index}>
                    <img src={comment.avatar} alt="User Avatar" width="40" height="40" className="mr-2" />
                    <div className="comment-content">
                        <div className="username">{comment.username}</div>
                        <div className="text">{comment.text}</div>
                        <i className="bi bi-three-dots" onClick={() => handleThreeDotsClick(index)}></i>
                        <div>
                            {openCommentId === index && (
                                <div className="three-dots-menu">
                                <ul>
                                    <li className='three-dots-option'>Edit comment</li>
                                    <li className='three-dots-option' onClick={() => deleteComment(index)}>Delete comment</li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
