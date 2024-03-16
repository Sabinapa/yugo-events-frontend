import React, { useState, useEffect } from 'react';

const Rating = ({ onChange, value, disableClick }) => {
    const [rating, setRating] = useState(value);

    useEffect(() => {
        // Posodobimo lokalno stanje ocene, ko se vrednost propa spremeni
        setRating(value);
    }, [value]);

    const handleClick = (value) => {
        if (!disableClick) {
            setRating(value);
            onChange(value);
        }
    };

    return (
        <div className="mb-3">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    style={{ cursor: disableClick ? 'default' : 'pointer', color: index < rating ? 'gold' : 'gray', fontSize: '22px' }}
                    onClick={() => handleClick(index + 1)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
