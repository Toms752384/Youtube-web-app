import React, { useState } from 'react';

function Comments({ comments, currentUser, addComment, deleteComment, editComment }) {
    const [openCommentId, setOpenCommentId] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [isAddingComment, setIsAddingComment] = useState(false);
    const [isEditingComment, setIsEditingComment] = useState(null);
    const [editCommentText, setEditCommentText] = useState('');

    const handleThreeDotsClick = (index) => {
        setOpenCommentId(openCommentId === index ? null : index);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            addComment({
                username: currentUser.username,
                avatar: currentUser.avatar,
                text: newComment,
            });
            setNewComment('');
            setIsAddingComment(false);
        }
    };

    const handleCancelComment = () => {
        setNewComment('');
        setIsAddingComment(false);
    };

    const handleEditComment = (index, text) => {
        setIsEditingComment(index);
        setEditCommentText(text);
    };

    const handleSaveEditComment = (index) => {
        editComment(index, editCommentText);
        setIsEditingComment(null);
        setEditCommentText('');
    };

    const handleCancelEditComment = () => {
        setIsEditingComment(null);
        setEditCommentText('');
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
                        {isEditingComment === index ? (
                            <div className="edit-comment">
                                <input
                                    type="text"
                                    value={editCommentText}
                                    onChange={(e) => setEditCommentText(e.target.value)}
                                    placeholder="Edit your comment..."
                                />
                                <div className="edit-comment-actions d-flex justify-content-end mt-2">
                                    <button onClick={handleCancelEditComment} className="btn btn-secondary mr-2">Cancel</button>
                                    <button onClick={() => handleSaveEditComment(index)} className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        ) : (
                            <div className="text">{comment.text}</div>
                        )}
                        <i className="bi bi-three-dots" onClick={() => handleThreeDotsClick(index)}></i>
                        <div>
                            {openCommentId === index && (
                                <div className="three-dots-menu">
                                    <ul>
                                        <li className='three-dots-option' onClick={() => handleEditComment(index, comment.text)}>Edit comment</li>
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
