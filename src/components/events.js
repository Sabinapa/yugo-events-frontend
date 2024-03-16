import React, { useState } from 'react';
import '../styles/events.css'
const EventsPage = () => {
    // Primeri eventov
    const eventsData = [
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
            review: 2.2,
        },
        {
            id: 4,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 1.2,
        },
        {
            id: 5,
            name: 'Titov bunker',
            image: '/images/zrce-hr.jpg',
            location: 'Šehidska br. 5, Konjic',
            review: 4.0,
        },
    ];

    // State for the selected filter option
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Filtered events based on the selected filter option
    let filteredEvents = selectedFilter === 'highest-review'
        ? [...eventsData].sort((a, b) => b.review - a.review) // Sort by review score in descending order
        : eventsData;

    // Event handler for changing the filter
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

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
        <div className="events-page">
            <h2>Events</h2>
            <div className="filter-container">
                <label htmlFor="filter">Filter:</label>
                <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="highest-review">Highest Review</option>
                </select>
            </div>
            <div className="events-container">
                {filteredEvents.map(event => (
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