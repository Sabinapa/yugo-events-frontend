import React, { useState, useEffect } from 'react';
import Rating from './Rating';

const CommentForm = ({ onAddComment }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [rating, setRating] = useState(0);
    const [resetRating, setResetRating] = useState(false);
    const [resetRatingStars, setResetRatingStars] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (resetRating) {
            setRating(0);
            setResetRating(false);
            setResetRatingStars(true); // Ponastavimo stanje obarvanosti zvezdic
        }
    }, [resetRating]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleRatingChange = (value) => {
        setRating(value);
        setResetRatingStars(false); // Ko se ocena spremeni, nastavimo stanje obarvanosti zvezdic na false
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !details || rating === 0) {
            setError('Please fill in all fields.');
            return;
        }
        const comment = {
            title: title,
            details: details,
            rating: rating
        };
        onAddComment(comment);
        setTitle('');
        setDetails('');
        setResetRating(true); // Nastavimo resetRating na true ob oddaji komentarja
        setError('');
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={handleTitleChange} />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Details" value={details} onChange={handleDetailsChange} />
                    </div>
                    <div className="mb-3">
                        <span>Rating:</span>
                        <Rating onChange={handleRatingChange} value={rating} resetStars={resetRatingStars} /> {/* Posredujemo trenutno oceno in stanje obarvanosti zvezdic */}
                    </div>
                    <button type="submit" className="btn btn-primary">Add Comment</button>
                    {error && <div className="text-danger mt-2">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
