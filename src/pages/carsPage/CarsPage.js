import '../../App'
import './CarsPageStyle.css'

//Components
import CarCardBig from '../../components/carCardBig/CarCardBig'

//Car Images
import AmgA45 from '../../images/amg-a45.png'
import BmwZ4 from '../../images/bmw-z4.png'
import Velar from '../../images/range-rover-velar.png'


function CarsPage() {
    return (
        <div className="cars-page-wrapper" >
            <CarCardBig carName="Mercedes AMG A45" power="381 KM" petrol="Benzyna" acceleration="4,1s do 100km/h" transmition="Automatic" maxSpeed="250 km/h" price="From 699 PLN" img={AmgA45} />
            <CarCardBig carName="BMW Z4" power="280 KM" petrol="Benzyna" acceleration="5,5s do 100km/h" transmition="Automatic" maxSpeed="220 km/h" price="From 499 PLN" img={BmwZ4} />
            <CarCardBig carName="Range Rover Velar" power="280 KM" petrol="Diesel" acceleration="7,0s do 100km/h" transmition="Automatic" maxSpeed="200 km/h" price="From 1099 PLN" img={Velar} />
        </div>
    );
}

export default CarsPage;
