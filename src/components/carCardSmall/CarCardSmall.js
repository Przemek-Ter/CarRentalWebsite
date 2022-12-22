import React from 'react'

import './CarCardSmallStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';


const CarCardSmall = props => {

    let imgSource;
    if (props.id === "bmw-z4") {
        imgSource = `${process.env.PUBLIC_URL + '/images/BMW-Z4-1.jpg'}`;
    } else if (props.id === "range-rover-velar") {
        imgSource = `${process.env.PUBLIC_URL + '/images/Range-Rover-Velar-1.jpg'}`;
    } else if (props.id === "mustang-gt") {
        imgSource = `${process.env.PUBLIC_URL + '/images/Ford-Mustang-1.jpg'}`;
    }

    return (
        <Link to={"/cars/" + props.id} className="car-card-small"> {/* Previosly it was div but to keep styling and Link need to switch className in Link */}
            <div className="car-card-small-info">
                <p className="car-card-small-title">{props.carName}</p>

                <div className="car-card-small-description">
                    <i class="fas fa-horse-head"></i>
                    <p>{props.power}</p>
                </div>

                <div className="car-card-small-description">
                    <i class="fas fa-gas-pump"></i>
                    <p>{props.petrol}</p>
                </div>

                <div className="car-card-small-description">
                    <i class="fas fa-stopwatch"></i>
                    <p>{props.acceleration}</p>
                </div>
            </div>

            <div className="car-card-small-galery">
                <img src={imgSource} alt="" />
            </div>
        </Link>
    )
}

export default CarCardSmall

