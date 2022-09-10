import React from 'react'

import './FooterStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-wraper">

                <div className="footer-social">
                    <a className="insta-icon" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="norefferer noreferrer" >
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a className="facebook-icon" href="https://www.facebook.com/watch/?v=471344660006374" target="_blank" rel="norefferer noreferrer" >
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a className="tiktok-icon" href="https://www.tiktok.com/@rickastleyofficial/video/6890858524092402946?is_copy_url=1&is_from_webapp=v1" target="_blank" rel="norefferer noreferrer" >
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>

                <div className="footer-nav">
                    <ul className="footer-links">
                        <Link to='/' className="footer-link">
                            <li>Strona Główna</li>
                        </Link>
                        <Link to='/cars' className="footer-link">
                            <li>Samochody / Ceny</li>
                        </Link>
                        <Link to='/about' className="footer-link">
                            <li>O Nas</li>
                        </Link>
                        <Link to='/statute' className="footer-link">
                            <li>Regulamin</li>
                        </Link>
                        <Link to='/contact-us' className="footer-link">
                            <li>Kontakt</li>
                        </Link>
                    </ul>
                </div>

                <div className="footer-contact">
                    <div className="footer-contact-phone">
                        <p className="footer-contact-title" >Telefon:</p>
                        <p className="footer-contact-content" >+48 570 072 336</p>
                    </div>
                    <div className="footer-contact-email">
                        <p className="footer-contact-title" >Email:</p>
                        <p className="footer-contact-content" >kontakt@luocars.pl</p>
                    </div>
                </div>

                <p>Luo Cars &copy; {new Date().getFullYear()}</p>

            </div>
        </div>
    )
}

export default Footer
