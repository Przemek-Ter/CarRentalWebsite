import React from 'react'

import './ContactSectionStyle.css'

//Components
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'


function ContactSection() {
    return (
        <div>
            <div className="background">
                <div className="texts">
                    <p className="phone-number">+48 881 214 214</p>
                    <p className="email-address">kontakt@luocars.pl</p>
                </div>
                <div className="buttons">
                    <Link to='/contact-us/question-form' className="link"> {/* Styling for this is in NavStyle.css */}
                        <Button text="Zadaj pytanie" />
                    </Link>
                    <Link to='/contact-us/reservation-form' className="link"> {/* Styling for this is in NavStyle.css */}
                        <Button text="Wynajmij Samochód" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
