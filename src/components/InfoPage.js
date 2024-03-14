import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './InfoPage.css';

const InfoPage = ({ locationData }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/info-page');
    };

    return (
        <div className="location-info">
            <img src="/images/zrce-hr.jpg" alt="Zrce" className="location-image" />
            <div className="location-details">
                <h2> Zrce </h2>
                <p>Lokacija: Hrvaška</p>
                <div className="description">
                    <p> Zrce je zakon. To je super lokacija za počitnice ob morju.</p>
                </div>
                <button onClick={handleButtonClick}>Več informacij</button>
            </div>
        </div>
    );
};


export default InfoPage;
