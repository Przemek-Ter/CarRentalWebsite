import '../../App'
import React from 'react'

//Components
import CarPageComponent from '../../components/carPage/CarPageComponent';

//Car Images
import BmwZ4Image from '../../images/bmw-z4.png'

//Data
import BmwZ4Data from '../../util/carsInfo/BmwZ4.json'


// BMW Z4
function CarTwoPage() {
    return (
        <div>
            <CarPageComponent
                //Info
                id={BmwZ4Data.id}
                carName={BmwZ4Data.carName}
                power={BmwZ4Data.power}
                engine={BmwZ4Data.engine}
                petrol={BmwZ4Data.petrol}
                transmission={BmwZ4Data.transmission}
                drive={BmwZ4Data.drive}
                acceleration={BmwZ4Data.acceleration}
                maxSpeed={BmwZ4Data.maxSpeed}
                deposit={BmwZ4Data.deposit}
                //Prices
                price1={BmwZ4Data.price1}
                price2={BmwZ4Data.price2}
                price3={BmwZ4Data.price3}
                price4={BmwZ4Data.price4}
                price5={BmwZ4Data.price5}
                price6={BmwZ4Data.price6}
                //Description
                descriptionTitle={BmwZ4Data.descriptionTitle}
                descriptionText1={BmwZ4Data.descriptionText1}
                descriptionText2={BmwZ4Data.descriptionText2}
                //Photo
                img={BmwZ4Image}
            />
        </div>
    );
}

export default CarTwoPage;
