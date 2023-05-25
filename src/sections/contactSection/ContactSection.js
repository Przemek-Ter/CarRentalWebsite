import React from 'react'

import './ContactSectionStyle.css'

import globalVariables from '../../globalVariables'

//Components
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'


function ContactSection() {
    return (
        <div>
            <div className="background">
                <div className="texts">
                    <p className="phone-number"><a href={`tel:${globalVariables.phone}`}>{globalVariables.phone}</a></p>
                    <p className="email-address"><a href={`mailto:${globalVariables.email}`}>{globalVariables.email}</a></p>
                </div>
                <div className="buttons">
                    <Link to='/contact-us/question-form' className="link"> {/* Styling for this is in NavStyle.css */}
                        <Button text="Zadaj pytanie" />
                    </Link>
                    <Link to='/contact-us/reservation-form' className="link"> {/* Styling for this is in NavStyle.css */}
                        <Button text="Zapytaj o dostępność" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
