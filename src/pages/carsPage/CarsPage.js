import '../../App'
import './CarsPageStyle.css'

//Components
import CarCardBig from '../../components/carCardBig/CarCardBig'

//Car Images
import AmgA45Image from '../../images/amg-a45.png'
import BmwZ4Image from '../../images/bmw-z4.png'
import VelarImage from '../../images/range-rover-velar.png'

//Data
import AmgA45Data from '../../util/carsInfo/AmgA45.json'
import BmwZ4Data from '../../util/carsInfo/BmwZ4.json'
import VelarData from '../../util/carsInfo/Velar.json'


function CarsPage() {
    return (
        <div className="cars-page-wrapper" >
            <CarCardBig
                id={AmgA45Data.id}
                carName={AmgA45Data.carName}
                power={AmgA45Data.power}
                petrol={AmgA45Data.petrol}
                acceleration={AmgA45Data.acceleration}
                transmission={AmgA45Data.transmission}
                maxSpeed={AmgA45Data.maxSpeed}
                price={AmgA45Data.price}
                img={AmgA45Image}
            />
            <CarCardBig
                id={BmwZ4Data.id}
                carName={BmwZ4Data.carName}
                power={BmwZ4Data.power}
                petrol={BmwZ4Data.petrol}
                acceleration={BmwZ4Data.acceleration}
                transmission={BmwZ4Data.transmission}
                maxSpeed={BmwZ4Data.maxSpeed}
                price={BmwZ4Data.price}
                img={BmwZ4Image}
            />
            <CarCardBig
                id={VelarData.id}
                carName={VelarData.carName}
                power={VelarData.power}
                petrol={VelarData.petrol}
                acceleration={VelarData.acceleration}
                transmission={VelarData.transmission}
                maxSpeed={VelarData.maxSpeed}
                price={VelarData.price}
                img={VelarImage}
            />
        </div>
    );
}

export default CarsPage;
