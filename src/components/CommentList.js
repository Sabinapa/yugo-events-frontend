import React, { useState, useEffect } from 'react';
import Rating from './Rating';
import profileImage from '../logo192.png'; // Pot do vaše profilne slike

const CommentList = ({ comments }) => {
    const [disableRatingClick, setDisableRatingClick] = useState(true); // Pomožno stanje za nadzorovanje možnosti klika na zvezdice

    const handleMouseEnter = () => {
        setDisableRatingClick(true); // Ko miška vstopi v blok, onemogočimo klike na zvezdice
    };

    const handleMouseLeave = () => {
        setDisableRatingClick(false); // Ko miška zapusti blok, omogočimo klike na zvezdice
    };

    const splitDetails = (details, maxLength) => {
        const chunks = [];
        for (let i = 0; i < details.length; i += maxLength) {
            chunks.push(details.substring(i, i + maxLength));
        }
        return chunks;
    };

    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index} className="card mb-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="card-body d-flex align-items-center">
                        <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px', marginTop: '-20px' }} />
                        <div style={{ marginLeft: '5px', marginTop: '20px' }}>
                            <h3 style={{ textAlign: 'left' }}>{comment.title}</h3> {/* Preverite, ali pravilno uporabljate naslov */}
                            {splitDetails(comment.details, 80).map((chunk, i) => (
                                <p key={i} style={{ textAlign: 'left' }}>
                                    {chunk}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="card-body">
                        <div style={{ marginLeft: '55px', marginTop: '-55px' }} className="d-flex align-items-center">
                            <span style={{ marginLeft: '10px' }}>{comment.rating}</span> {/* Izpis številke */}
                            <span style={{ marginLeft: '5px', marginTop: '15px' }}>
                                <Rating value={comment.rating} disableClick={disableRatingClick} /> {/* Preverite, ali pravilno uporabljate oceno */}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
