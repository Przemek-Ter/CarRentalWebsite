import React from 'react'

import './CarCardSmallStyle.css'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';


const CarCardSmall = props => {
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
                <img src={props.img} alt="" />
            </div>
        </Link>
    )
}

export default CarCardSmall

