import '../../App'
import React from 'react'

//Components
import CarPageComponent from '../../components/carPage/CarPageComponent';

//Car Images
import AudiA4Image from '../../images/audi-a4.jpeg'

//Data
import AudiA4Data from '../../util/carsInfo/AudiA4.json'


// BMW Z4
function CarTwoPage() {
    return (
        <div>
            <CarPageComponent
                //Info
                id={AudiA4Data.id}
                carName={AudiA4Data.carName}
                power={AudiA4Data.power}
                engine={AudiA4Data.engine}
                petrol={AudiA4Data.petrol}
                transmission={AudiA4Data.transmission}
                drive={AudiA4Data.drive}
                acceleration={AudiA4Data.acceleration}
                maxSpeed={AudiA4Data.maxSpeed}
                deposit={AudiA4Data.deposit}
                //Prices
                price1={AudiA4Data.price1}
                price2={AudiA4Data.price2}
                price3={AudiA4Data.price3}
                price4={AudiA4Data.price4}
                price5={AudiA4Data.price5}
                price6={AudiA4Data.price6}
                //Description
                descriptionTitle={AudiA4Data.descriptionTitle}
                descriptionText1={AudiA4Data.descriptionText1}
                descriptionText2={AudiA4Data.descriptionText2}
                //Photo
                img={AudiA4Image}
            />
        </div>
    );
}

export default CarTwoPage;
