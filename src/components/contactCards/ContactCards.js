import '../../App'
import './ContactCardsStyle.css'

import globalVariables from '../../globalVariables';

//Components
import Button from '../../components/button/Button';

//For navigation
import { Link } from 'react-router-dom';

//Photos
import MapImage from '../../images/Map.jpg'


function ContactCards() {
    return (
        <div className="contact-cards">
            {/* Phone and E-mail */}
            <div className="contact-card">
                <div className="contact-card-left">
                    <div className="contact-card-left-phone">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <p className="contact-card-text"><a href={`tel:${globalVariables.phone}`}>{globalVariables.phone}</a></p>
                </div>
                <div className="contact-card-right">
                    <div className="contact-card-right-email">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <p className="contact-card-text"><a href={`mailto:${globalVariables.email}`}>{globalVariables.email}</a></p>
                </div>
            </div>

            {/* Forms */}
            <div className="contact-card-forms">
                <div className="contact-card-left">
                    <Link to='/contact-us/question-form' className="link-question"> {/* Styling for this is in NavStyle.css */}
                        <div className="question-us-button-area">
                            <Button text="Zadaj nam pytanie" />
                        </div>
                    </Link>
                </div>
                <div className="contact-card-right">
                    <Link to='/contact-us/reservation-form' className="link-question"> {/* Styling for this is in NavStyle.css */}
                        <div className="rent-car-button-area">
                            <Button text="Wynajmij Samochód" />
                        </div>
                    </Link>

                </div>
            </div>

            {/* Localization */}
            <div className="contact-card-map">
                <div className="contact-card-up">
                    <div className="contact-card-map-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <a className="contact-card-map-text" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Migowska+49A,+80-287+Gda%C5%84sk/@54.365075,18.5930303,17z/data=!3m1!4b1!4m5!3m4!1s0x46fd748b6b0fc75d:0xac629bc4eca387db!8m2!3d54.365075!4d18.595219">Znajdziesz nas w Gdańsku na ul.Migowskiej 49A</a>

                </div>
                <div className="contact-card-down">
                    <img src={MapImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ContactCards;
