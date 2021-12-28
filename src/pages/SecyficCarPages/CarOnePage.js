import '../../App'
import React from 'react'

//Components
import CarPageComponent from '../../components/carPage/CarPageComponent';

//Car Images
import AmgA45Image from '../../images/amg-a45.png'

//Data
import AmgA45Data from '../../util/carsInfo/AmgA45.json'


// MERCEDES AMG A45
function CarOnePage() {
    return (
        <div>
            <CarPageComponent
                //Info
                id={AmgA45Data.id}
                carName={AmgA45Data.carName}
                power={AmgA45Data.power}
                engine={AmgA45Data.engine}
                petrol={AmgA45Data.petrol}
                transmission={AmgA45Data.transmission}
                drive={AmgA45Data.drive}
                acceleration={AmgA45Data.acceleration}
                maxSpeed={AmgA45Data.maxSpeed}
                deposit={AmgA45Data.deposit}
                //Prices
                price1={AmgA45Data.price1}
                price2={AmgA45Data.price2}
                price3={AmgA45Data.price3}
                price4={AmgA45Data.price4}
                price5={AmgA45Data.price5}
                price6={AmgA45Data.price6}
                //Description
                descriptionTitle={AmgA45Data.descriptionTitle}
                descriptionText1={AmgA45Data.descriptionText1}
                descriptionText2={AmgA45Data.descriptionText2}
                //Photo
                img={AmgA45Image}
            />
        </div>
    );
}

export default CarOnePage;
