import React from 'react';
//import './InfoPage.css';

const InfoPage2 = ({ locationData }) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src="/images/kranjskagora.jpg" alt="Kranjska Gora" className="img-fluid mx-auto"
                         style={{maxWidth: '70%', height: 'auto'}}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="location-details">
                        <h2 className="font-weight-bold display-1 mb-4">Kranjska gora</h2>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem'
                        }}>
                            <img src="/images/location-outline.svg" alt="Opis slike"
                                 style={{width: 'auto', height: '1em', marginRight: '0.5rem', maxHeight: '1em'}}/>
                            <p style={{margin: 0}}>Lokacija: Hrvaška</p>
                        </div>

                        <div className="description bg-dark text-white p-3 rounded mb-3"
                             style={{maxWidth: '70%', margin: '0 auto'}}>
                            <p>Zrce je zakon. To je super lokacija za počitnice ob morju.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default InfoPage2;
