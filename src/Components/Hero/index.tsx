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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus accusamus corporis eveniet velit quam atque eius maxime, itaque provident pariatur quis, optio sed exercitationem mollitia harum sapiente maiores neque magnam.</p>
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