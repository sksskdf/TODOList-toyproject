import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = socketIO.connect('http://localhost:4000');

const Comments = () => {
    const [comments, setComments] = useState("");

    const addComment = (e) => {
        e.preventDefault();
        console.log({
            comment: comments,
            userId: localStrorage.getItem('userId'),
        });
        setComments("");
    }

    return (
        <div className="comments__contaienr">
            <form className="comment__form" onSubmit={addComment}>
                <textarea
                        placeholder='Type your comment...'
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        rows={5}
                        id="comment"
                        name="comment"
                        required
                ></textarea>
                <button className="commentBtn">ADD COMMENT</button>
            </form>

            <div className="comments__section">
                <h2>Existing Comments</h2>
                <div></div>
            </div>
        </div>
    );
};
