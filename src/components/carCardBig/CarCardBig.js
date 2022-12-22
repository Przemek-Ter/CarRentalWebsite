import React from 'react'

import './CarCardBigStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';

//Components
import Button from '../button/Button'

const CarCardBig = props => {

    let imgSource;
    if (props.id === "bmw-z4") {
        imgSource = `${process.env.PUBLIC_URL + '/images/BMW-Z4-1.jpg'}`;
    } else if (props.id === "range-rover-velar") {
        imgSource = `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-1.jpg'}`;
    } else if (props.id === "mustang-gt") {
        imgSource = `${process.env.PUBLIC_URL + '/images/Ford-Mustang-1.jpg'}`;
    }

    return (
        <div className="car-card-big">
            <div className="car-card-big-info">
                <p className="car-card-big-title">{props.carName}</p>
                <div className="car-card-big-info-bottom">
                    <div className="car-card-big-info-details">
                        {/* HorePower */}
                        <div className="car-card-big-description">
                            <i class="fas fa-horse-head"></i>
                            <p>{props.power}</p>
                        </div>
                        {/* Petrol Type */}
                        <div className="car-card-big-description">
                            <i class="fas fa-gas-pump"></i>
                            <p>{props.petrol}</p>
                        </div>
                        {/* Time to 100km/h */}
                        <div className="car-card-big-description">
                            <i class="fas fa-stopwatch"></i>
                            <p>{props.acceleration}</p>
                        </div>
                        {/* Transmition */}
                        <div className="car-card-big-description">
                            <i class="fas fa-level-up-alt"></i>
                            <p>{props.transmission}</p>
                        </div>
                        {/* Max Speed */}
                        <div className="car-card-big-description">
                            <i class="fas fa-tachometer-alt"></i>
                            <p>{props.maxSpeed}</p>
                        </div>
                    </div>
                    {/* Rent Button */}
                    <Link to={props.id} className="link"> {/* Styling for this is in NavStyle.css */}
                        <div className="car-card-big-button-space">
                            <Button text={props.price} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="car-card-big-galery">
                <img src={imgSource} alt="" />
            </div>
        </div >
    )
}

export default CarCardBig

