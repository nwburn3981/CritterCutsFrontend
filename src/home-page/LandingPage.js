import React from 'react';
import Header from '../components/Header';

const LandingPage = () => {

    return (
        <div className='landing-page-container'>
            <div className='blurb'>
                <img className='arrow' src={require('../images/arrow.png')} alt='arrow' />
                <h2>Click login/Register to schedule an appointment today!</h2>
            </div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../images/ad1.jpg')} className="d-block w-100" alt="Animal pictures" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../images/ad2.jpg')} className="d-block w-100" alt="Animal pictures" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../images/ad3.jpg')} className="d-block w-100" alt="Animal pictures" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default LandingPage;