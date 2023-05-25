import React, { useState, useEffect, Component } from 'react';

import '../navbarNew/NavBarStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';

// import Logo from '../../images/Luo_Logo_Icon_White.png'
// import Logo from '../../images/Luo_Logo_Name_White.png'
import Logo from '../../images/Luo_Logo_Name_White.png'



class NavBar extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav>
                <Link to='/' className="link">
                    <img src={Logo} alt='Logo' className='navBar-logo' ></img>
                </Link>
                <ul className={this.state.clicked ? "navBar-links-active" : "navBar-links"}>
                    <Link to='/' className="navBar-link" onClick={this.handleClick}>
                        <li>Strona Główna</li>
                    </Link>
                    <Link to='/cars' className="navBar-link" onClick={this.handleClick}>
                        <li>Samochody / Ceny</li>
                    </Link>
                    <Link to='/about' className="navBar-link" onClick={this.handleClick}>
                        <li>O Nas</li>
                    </Link>
                    <Link to='/statute' className="navBar-link" onClick={this.handleClick}>
                        <li>Regulamin</li>
                    </Link>
                    <Link to='/contact-us' className="navBar-link" onClick={this.handleClick}>
                        <li>Kontakt</li>
                    </Link>
                </ul>
                <div className="navBar-mobile" onClick={this.handleClick}>
                    <i id='navBar-bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        );
    }
}
export default NavBar;
