import React from 'react'

import './CarCardSmallStyle.css'

const CarCardSmall = props => {
    return (
        <div className="car-card-small">
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
        </div>
    )
}

export default CarCardSmall

