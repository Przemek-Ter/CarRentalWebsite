import '../../App'
import React from 'react'
//Components
import HeroSection from '../../sections/heroSection/HeroSection';
import ContactSection from '../../sections/contactSection/ContactSection';
import CarSectionHome from '../../sections/carsSectionHome/CarSectionHome';

function HomePage() {
    return (
        <div>
            <HeroSection />
            <ContactSection />
            <CarSectionHome />
        </div>
    );
}

export default HomePage;
