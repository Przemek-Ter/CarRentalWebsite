import React from 'react'
import CarCardSmall from '../../components/carCardSmall/CarCardSmall'

import './CarSectionHomeStyle.css'

//Car Images
import AmgA45 from '../../images/amg-a45.png'
import BmwZ4 from '../../images/bmw-z4.png'
import Velar from '../../images/range-rover-velar.png'

const CarSectionHome = props => {
    return (
        <div className="car-section-home">
            <CarCardSmall carName="Mercedes AMG A45" power="381 KM" petrol="Benzyna" acceleration="4,1s do 100km/h" img={AmgA45} />
            <CarCardSmall carName="BMW Z4" power="280 KM" petrol="Benzyna" acceleration="5,5s do 100km/h" img={BmwZ4} />
            <CarCardSmall carName="Range Rover Velar" power="280 KM" petrol="Diesel" acceleration="7,0s do 100km/h" img={Velar} />
        </div>
    )
}

export default CarSectionHome

