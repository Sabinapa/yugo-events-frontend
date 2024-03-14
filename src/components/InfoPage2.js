import React from 'react';
//import './InfoPage.css';

const InfoPage2 = ({ locationData }) => {

    return (
        <div className="location-info">
            <img src="/images/zrce-hr.jpg" alt="Zrce" className="location-image" />
            <div className="location-details">
                <h2> Zrce </h2>
                <p>Lokacija: Hrvaška</p>
                <div className="description">
                    <p> Zrce je zakon. To je super lokacija za počitnice ob morju.</p>
                </div>
            </div>
        </div>
    );
};


export default InfoPage2;
