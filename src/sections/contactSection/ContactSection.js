import React from 'react'

import './ContactSectionStyle.css'

//Components
import Button from '../../components/button/Button'


function ContactSection() {
    return (
        <div>
            <div className="background">
                <div className="texts">
                    <p className="phone-number">+48 508 804 466</p>
                    <p className="email-address">kontakt@luocars.pl</p>
                </div>
                <div className="buttons">
                    <Button text="Zadaj pytanie" />
                    <Button text="Zarezerwuj samochód" />
                </div>
            </div>
        </div>
    )
}

export default ContactSection
