import '../../App'

//Style
import './AboutPageStyle.css'

//Photos
import MapImage from '../../images/Map.jpg'

function AboutPage() {
    return (
        <div className="about-page" >
            <div className="about-page-wrapper">
                <div className="about-page-short-info">
                    <p>Działamy jako profesjonalna wypożyczalnia samochodów i motocykli na terenie Warszawy. Jednak na życzenie klienta, dostarczymy również pojazd w pozostałych częściach kraju. Co nas wyróżnia? Przede wszystkim duża flota samochodów najwyższej jakości we wszystkim klasach – premium, luksusowe, sportowe, czy miejskie. Dostosowujemy się do klientów indywidualnych oraz firm.</p>
                </div>
                <div className="about-page-availability">
                    <p className="about-page-availability-table-title">Jesteśmy dostępni pod telefonem</p>
                    <table className="about-page-availability-table" >
                        <thead>
                            <tr>
                                <th>Dla nowych klientów</th>
                                <th>W trakcie wynajmu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Codziennie 8:00 - 16:00</td>
                                <td>24h/7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <div className="about-page-map-space">
                    <div className="about-page-map-space-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <a className="about-page-map-text" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Migowska+49A,+80-287+Gda%C5%84sk/@54.365075,18.5930303,17z/data=!3m1!4b1!4m5!3m4!1s0x46fd748b6b0fc75d:0xac629bc4eca387db!8m2!3d54.365075!4d18.595219">Znajdziesz nas w Gdańsku na Migowskiej 49A</a>
                </div> */}
            </div>
            {/* <div className="about-page-map">
                <img src={MapImage} alt="" />
            </div> */}
        </div>
    );
}

export default AboutPage;
