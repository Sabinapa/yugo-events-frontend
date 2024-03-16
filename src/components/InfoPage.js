import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPage = ({ locationData }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/info-page');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="/images/banja-luka.jpg" alt="Banja Luka" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="location-details">
                        <h2 className="font-weight-bold display-1">BANJA LUKA</h2>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <img src="/images/location-outline.svg" alt="Opis slike"
                                 style={{width: 'auto', height: '1em', marginRight: '0.5rem', maxHeight: '1em'}}/>
                            <p style={{margin: 0}}> Bosna in Hercegovina</p>
                        </div>
                        <div className="description bg-dark text-white p-3 rounded mb-3">
                            <p>Banjaluka (srbsko Бања Лука) je z okoli 250.000 prebivalci drugo največje mesto v Bosni in Hercegovini. Banjaluka je tudi prestolnica entitete Republike Srbske in največje mesto Bosanske Krajine. Mesto leži na bregovih reke Vrbas, na kraju, kjer že izgublja lastnosti gorske reke in se nato po ravnini vije do izliva v reko Savo. Vrbas teče po sredini mesta in na mestnem področju se v njega izlivajo pritoki Suturlija, Crkvena in Vrbanja. Mesto je politično, kulturno in gospodarsko središče bosanskih Srbov, ki v mestu danes predstavljajo 90 % prebivalstva.</p>
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
