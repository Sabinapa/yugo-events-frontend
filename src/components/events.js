import React from 'react';
import '../styles/events.css'
const EventsPage = () => {
    // Primeri eventov
    const events = [
        {
            id: 1,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 4.5,
        },
        {
            id: 2,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 3.8,
        },
        {
            id: 3,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 4.2,
        },
        {
            id: 4,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 4.7,
        },
        {
            id: 5,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 4.0,
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const decimalPart = rating - fullStars;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star-icon">&#9733;</span>);
            } else if (i === fullStars && decimalPart > 0) {
                stars.push(
                    <span key={i} className="star-icon" style={{width: `${decimalPart * 100}%`}}>
          &#9733;
        </span>
                );
            } else {
                stars.push(<span key={i} className="star-icon empty">&#9734;</span>);
            }
        }
        return stars;
    };

    return (
        <div>
            <h2>Events</h2>
            <div className="events-container">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.name} className="event-image" />
                        <div className="event-details">
                            <h3>{event.name}</h3>
                            <p>
                                <img src="/images/location-outline.svg" alt="Location" className="location-icon" />
                                {event.location}
                            </p>
                            <div className="review">
                                <span>{renderStars(event.review)}</span>
                            </div>
                        </div>
                        <img src="/images/right-arrow.svg" alt="right-arrow" className="right-arrow-icon"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventsPage;