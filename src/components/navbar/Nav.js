import React, { useState, useEffect } from 'react';

import '../navbar/NavStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';

function Nav() {

    // Logic behing toggling navbar menu
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav className="nav">
            {/* Logo */}
            <Link to='/' className="link">
                <h2 className="logo">Luo Cars</h2>
            </Link>
            {/* Nav items */}
            {(toggleMenu || screenWidth > 768) && (
                <ul className="nav-links">
                    <Link to='/' className="link">
                        <li onClick={toggleNav}>Home</li>
                    </Link>
                    <Link to='/cars' className="link">
                        <li onClick={toggleNav}>Cars/Prices</li>
                    </Link>
                    <Link to='/about' className="link">
                        <li onClick={toggleNav}>About Us</li>
                    </Link>
                    <Link to='/statute' className="link">
                        <li onClick={toggleNav}>Statute</li>
                    </Link>
                    <Link to='/contact-us' className="link">
                        <li onClick={toggleNav}>Contact Us</li>
                    </Link>
                </ul>
            )}
            {/* Nav-Menu Icon */}
            <i class="fas fa-bars" onClick={toggleNav}></i>
        </nav>
    );
}

export default Nav;
