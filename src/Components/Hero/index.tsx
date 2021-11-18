import React from 'react'
import './index.css'

import HeroImage from '../../Assets/Images/HeroImage.jpeg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container hero-container">
                <div className="hero-content-box">
                    <div className="hero-content">
                        <h1>We serve the best <span style={{color:'red'}}>taste</span></h1>
                        <p>Fresh ingredients combined with a commitment to please is the secret to an incredible dining experience. Our philosophy is simple — we are devoted to serving the best taste</p>
                    </div>
                    <div className="hero-content-img-container hero-img">
                            <img src={HeroImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero