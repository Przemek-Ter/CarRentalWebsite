import '../../App'
import React from 'react'

//Style file
import '../carPage/CarPageComponentStyle.css'

import globalVariables from '../../globalVariables';

//For navigation
import { Link } from 'react-router-dom';

//Components
import Slider from '../slider/Slider'
import PriceCage from '../priceCage/PriceCage'
import Button from '../button/Button'

const CarPageComponent = props => {
    return (
        <div className="car-page-component-wrapper">
            <div className="car-page-image-and-data-section">
                <div className="car-page-image-section">
                    <Slider id={props.id} />
                </div>
                <div className="car-page-car-data-section">
                    <h1 className="car-page-car-data-name" >{props.carName}</h1>
                    <div className="car-page-car-data-table">
                        <div className="car-page-car-data-table-info">
                            <div className="car-page-car-data-table-titles">
                                <p>Moc</p>
                                <p>Silnik</p>
                                <p>Paliwo</p>
                                <p>Skrzynia</p>
                                <p>Napęd</p>
                                <p>Przyspieszenie</p>
                                <p>Prędkość Max</p>
                            </div>
                            <div className="car-page-car-data-table-data">
                                <p>{props.power}</p>
                                <p>{props.engine}</p>
                                <p>{props.petrol}</p>
                                <p>{props.transmission}</p>
                                <p>{props.drive}</p>
                                <p>{props.acceleration}</p>
                                <p>{props.maxSpeed}</p>
                            </div>
                        </div>
                    </div>
                    <div className="car-page-car-data-rent">
                        <p className="car-page-car-data-rent-phone" >{globalVariables.phone}</p>
                        <Link to='/contact-us/reservation-form' className="link">
                            <Button text="Wynajmij online" />
                        </Link>

                    </div>
                </div>
            </div>
            <div className="car-page-prices-section">
                <PriceCage topText="8h" bottomText={props.price1} />
                <PriceCage topText="24h" bottomText={props.price2} />
                <PriceCage topText="3 dni" bottomText={props.price3} />
                <PriceCage topText="Weekend" bottomText={props.price4} />
                <PriceCage topText="7 dni" bottomText={props.price5} />
                <PriceCage topText="30 dni" bottomText={props.price6} />
                <PriceCage topText="Kaucja" bottomText={props.deposit} />
            </div>
            <div className="car-page-description-section">
                <p className="car-page-description-title">{props.descriptionTitle}</p>
                <p className="car-page-description-text">{props.descriptionText1}</p>
                <p className="car-page-description-text">{props.descriptionText2}</p>
                {/* Addons */}
                <p className="car-page-description-addon" >* Wynajem na mniej niż 3 dni liczony jest w dni Pon - Pt</p>
                <p className="car-page-description-addon" >* Weekend to czas od Pt 18:00 do Nd 18:00</p>
                <p className="car-page-description-addon" >* Wynajem na więcej niż jeden miesiąc - stawka indywidualna</p>
            </div>
        </div>
    )
}

export default CarPageComponent
