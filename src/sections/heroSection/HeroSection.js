import '../../App'
import React from 'react'

import './HeroSectionStyle.css'

//Components
import AnimatedText from '../../components/animatedText/AnimatedText';

//Video for the background
import AmgA45Vid from "../../videos/amg-a45.mp4"

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-background">
                <video autoPlay loop muted playsInline>
                    <source src={AmgA45Vid} type='video/mp4' />
                </video>
            </div>
            <div className="hero-teksts">
                <h1>Luo Cars</h1>
                <div className="description">
                    <p>Wyporzyczalnia samochodów </p>
                    <AnimatedText />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
