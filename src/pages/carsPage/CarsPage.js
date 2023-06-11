import '../../App'
import './CarsPageStyle.css'

//Components
import CarCardBig from '../../components/carCardBig/CarCardBig'

//Data
import MustangGTData from '../../util/carsInfo/MustangGT.json'
import BmwZ4Data from '../../util/carsInfo/BmwZ4.json'
import VelarData from '../../util/carsInfo/Velar.json'
// import AudiA4Data from '../../util/carsInfo/AudiA4.json'

//For navigation purpose (need to install first)
import { Link } from 'react-router-dom';

function CarsPage() {
    return (
        <div className="cars-page-wrapper" >
            <Link to={MustangGTData.id} className="link"> {/* Styling for this is in NavStyle.css */}
                <CarCardBig
                    id={MustangGTData.id}
                    carName={MustangGTData.carName}
                    power={MustangGTData.power}
                    petrol={MustangGTData.petrol}
                    acceleration={MustangGTData.acceleration}
                    transmission={MustangGTData.transmission}
                    maxSpeed={MustangGTData.maxSpeed}
                    price={MustangGTData.price}
                />
            </Link>
            <Link to={BmwZ4Data.id} className="link"> {/* Styling for this is in NavStyle.css */}
                <CarCardBig
                    id={BmwZ4Data.id}
                    carName={BmwZ4Data.carName}
                    power={BmwZ4Data.power}
                    petrol={BmwZ4Data.petrol}
                    acceleration={BmwZ4Data.acceleration}
                    transmission={BmwZ4Data.transmission}
                    maxSpeed={BmwZ4Data.maxSpeed}
                    price={BmwZ4Data.price}
                />
            </Link>
            <Link to={VelarData.id} className="link"> {/* Styling for this is in NavStyle.css */}
                <CarCardBig
                    id={VelarData.id}
                    carName={VelarData.carName}
                    power={VelarData.power}
                    petrol={VelarData.petrol}
                    acceleration={VelarData.acceleration}
                    transmission={VelarData.transmission}
                    maxSpeed={VelarData.maxSpeed}
                    price={VelarData.price}
                />
            </Link>

            {/* <CarCardBig
                id={AudiA4Data.id}
                carName={AudiA4Data.carName}
                power={AudiA4Data.power}
                petrol={AudiA4Data.petrol}
                acceleration={AudiA4Data.acceleration}
                transmission={AudiA4Data.transmission}
                maxSpeed={AudiA4Data.maxSpeed}
                price={AudiA4Data.price}
                img={AudiImage}
            /> */}
        </div>
    );
}

export default CarsPage;
