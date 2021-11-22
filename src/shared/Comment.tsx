import React from "react";

interface CommentProps {
    user: GatsbyTypes.Linear_User;
    content: string;
}
export default function Comment({user, content}: CommentProps): JSX.Element {
    return (
        <div className="comment-container">
            <img className="comment-author-avatar" src={user.avatarUrl} alt={`${user.name}'s avatar`} />
            <div className="comment-content">
                <div className="comment-author-name">{user.name}</div>
                <div className="comment-text">{content}</div>
            </div>
        </div>
    );
}
