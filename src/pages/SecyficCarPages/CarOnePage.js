import '../../App'
import React from 'react'

//Components
import CarPageComponent from '../../components/carPage/CarPageComponent';

//Car Images
import MustangGTImage from '../../images/ford-mustang-gt.jpeg'

//Data
import MustangGTData from '../../util/carsInfo/MustangGT.json'


// MERCEDES AMG A45
function CarOnePage() {
    return (
        <div>
            <CarPageComponent
                //Info
                id={MustangGTData.id}
                carName={MustangGTData.carName}
                power={MustangGTData.power}
                engine={MustangGTData.engine}
                petrol={MustangGTData.petrol}
                transmission={MustangGTData.transmission}
                drive={MustangGTData.drive}
                acceleration={MustangGTData.acceleration}
                maxSpeed={MustangGTData.maxSpeed}
                deposit={MustangGTData.deposit}
                //Prices
                price1={MustangGTData.price1}
                price2={MustangGTData.price2}
                price3={MustangGTData.price3}
                price4={MustangGTData.price4}
                price5={MustangGTData.price5}
                price6={MustangGTData.price6}
                //Description
                descriptionTitle={MustangGTData.descriptionTitle}
                descriptionText1={MustangGTData.descriptionText1}
                descriptionText2={MustangGTData.descriptionText2}
                //Photo
                img={MustangGTImage}
            />
        </div>
    );
}

export default CarOnePage;
