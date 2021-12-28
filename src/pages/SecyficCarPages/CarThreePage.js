import '../../App'
import React from 'react'

//Components
import CarPageComponent from '../../components/carPage/CarPageComponent';

//Car Images
import VelarImage from '../../images/range-rover-velar.png'

//Data
import VelarData from '../../util/carsInfo/Velar.json'


// RANGE ROVER VELAR
function CarThreePage() {
    return (
        <div>
            <CarPageComponent
                //Info
                id={VelarData.id}
                carName={VelarData.carName}
                power={VelarData.power}
                engine={VelarData.engine}
                petrol={VelarData.petrol}
                transmission={VelarData.transmission}
                drive={VelarData.drive}
                acceleration={VelarData.acceleration}
                maxSpeed={VelarData.maxSpeed}
                deposit={VelarData.deposit}
                //Prices
                price1={VelarData.price1}
                price2={VelarData.price2}
                price3={VelarData.price3}
                price4={VelarData.price4}
                price5={VelarData.price5}
                price6={VelarData.price6}
                //Description
                descriptionTitle={VelarData.descriptionTitle}
                descriptionText1={VelarData.descriptionText1}
                descriptionText2={VelarData.descriptionText2}
                //Photo
                img={VelarImage}
            />
        </div>
    );
}

export default CarThreePage;
