import React from 'react';

const LoginHome = () => {
    return (
        <div>
            <div className='landing-page-container'>
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
        </div>
    );
};

export default LoginHome;