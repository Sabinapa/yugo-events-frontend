import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './InfoPage.css';

const InfoPage = ({ locationData }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/info-page');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="/images/zrce-hr.jpg" alt="Zrce" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="location-details">
                        <h2 className="font-weight-bold display-1">Zrce</h2>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <img src="/images/location-outline.svg" alt="Opis slike"
                                 style={{width: 'auto', height: '1em', marginRight: '0.5rem', maxHeight: '1em'}}/>
                            <p style={{margin: 0}}>Lokacija: Hrvaška</p>
                        </div>
                        <div className="description bg-dark text-white p-3 rounded mb-3">
                            <p>Zrce je zakon. To je super lokacija za počitnice ob morju.</p>
                        </div>

                        <button className="btn btn-outline-secondary" onClick={handleButtonClick}>
                            Več informacij
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
