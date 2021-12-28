import React from 'react'
import CarCardSmall from '../../components/carCardSmall/CarCardSmall'

import './CarSectionHomeStyle.css'

//Car Images
import AmgA45Image from '../../images/amg-a45.png'
import BmwZ4Image from '../../images/bmw-z4.png'
import VelarImage from '../../images/range-rover-velar.png'

//Data
import AmgA45Data from '../../util/carsInfo/AmgA45.json'
import BmwZ4Data from '../../util/carsInfo/BmwZ4.json'
import VelarData from '../../util/carsInfo/Velar.json'

const CarSectionHome = props => {
    return (
        <div className="car-section-home">
            <CarCardSmall id={AmgA45Data.id} carName={AmgA45Data.carName} power={AmgA45Data.power} petrol={AmgA45Data.petrol} acceleration={AmgA45Data.acceleration} img={AmgA45Image} />
            <CarCardSmall id={BmwZ4Data.id} carName={BmwZ4Data.carName} power={BmwZ4Data.power} petrol={BmwZ4Data.petrol} acceleration={BmwZ4Data.acceleration} img={BmwZ4Image} />
            <CarCardSmall id={VelarData.id} carName={VelarData.carName} power={VelarData.power} petrol={VelarData.petrol} acceleration={VelarData.acceleration} img={VelarImage} />
        </div>
    )
}

export default CarSectionHome

