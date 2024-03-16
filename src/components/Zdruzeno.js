import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Rating from './Rating';
import profileImage from '../logo192.png';

function Zdruzeno() {
    const [comments, setComments] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [disableRatingClick, setDisableRatingClick] = useState(false);

    const handleMouseEnter = () => {
        setDisableRatingClick(true);
    };

    const handleMouseLeave = () => {
        setDisableRatingClick(false);
    };

    const handleAddComment = (comment) => {
        const updatedComments = [...comments, comment];
        setComments(updatedComments);

        const ratings = updatedComments.map(comment => comment.rating);
        const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
        setAverageRating(avgRating.toFixed(1));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflow: 'auto' }}>
            <div style={{ maxWidth: '800px', width: '100%', marginTop: 'auto', marginBottom: '20px' }}>
                <header className="text-center mb-4">
                    <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                    <h1>Naslov</h1>
                    <hr style={{ marginLeft: '-25px' }} />
                    <p>Location</p>
                    <p>Average Rating: {averageRating} ({comments.length} ratings)</p>
                    <Rating value={parseFloat(averageRating)} disableClick={disableRatingClick} />
                </header>
                <CommentList comments={comments} />
            </div>
            <div style={{ maxWidth: '800px', width: '100%', marginBottom: 'auto' }}>
                <CommentForm onAddComment={handleAddComment} />
            </div>
        </div>
    );
}

export default Zdruzeno;
