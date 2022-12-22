import React from 'react'
import CarCardSmall from '../../components/carCardSmall/CarCardSmall'

import './CarSectionHomeStyle.css'

//Data
import BmwZ4Data from '../../util/carsInfo/BmwZ4.json'
import VelarData from '../../util/carsInfo/Velar.json'
import MustangGTData from '../../util/carsInfo/MustangGT.json'
import AudiA4Data from '../../util/carsInfo/AudiA4.json'

const CarSectionHome = props => {
    return (
        <div className="car-section-home">
            <CarCardSmall
                id={MustangGTData.id}
                carName={MustangGTData.carName}
                power={MustangGTData.power}
                petrol={MustangGTData.petrol}
                acceleration={MustangGTData.acceleration}
            />
            <CarCardSmall
                id={BmwZ4Data.id}
                carName={BmwZ4Data.carName}
                power={BmwZ4Data.power}
                petrol={BmwZ4Data.petrol}
                acceleration={BmwZ4Data.acceleration}
            />
            <CarCardSmall
                id={VelarData.id}
                carName={VelarData.carName}
                power={VelarData.power}
                petrol={VelarData.petrol}
                acceleration={VelarData.acceleration}
            />
            {/* <CarCardSmall
                id={AudiA4Data.id}
                carName={AudiA4Data.carName}
                power={AudiA4Data.power}
                petrol={AudiA4Data.petrol}
                acceleration={AudiA4Data.acceleration}
                img={AudiImage}
            /> */}
        </div>
    )
}

export default CarSectionHome

