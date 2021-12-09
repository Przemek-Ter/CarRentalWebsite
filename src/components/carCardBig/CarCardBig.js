import React from 'react'

import './CarCardBigStyle.css'

//Components
import Button from '../button/Button'

const CarCardBig = props => {
    return (
        <div className="car-card-big">
            <div className="car-card-big-info">
                <p className="car-card-big-title">{props.carName}</p>
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
                    <p>{props.transmition}</p>
                </div>
                {/* Max Speed */}
                <div className="car-card-big-description">
                    <i class="fas fa-tachometer-alt"></i>
                    <p>{props.maxSpeed}</p>
                </div>
                {/* Rent Button */}
                <div className="car-card-big-button-space">
                    <Button text={props.price} />
                </div>

            </div>

            <div className="car-card-big-galery">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default CarCardBig

