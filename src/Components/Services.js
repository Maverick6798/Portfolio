import React from 'react'

const Services = () => {
    return(
        <div className="Service">
            <div className="max-width">
                <h2 className="Title">My Services</h2>
                <div className="services-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Web Development</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Data Analysis</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;