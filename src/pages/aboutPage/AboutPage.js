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
                    <p>Jetseśmy profesjonalną wypożyczalnią samochodów sportowych i luksusowych.Działamy na terenie Trójmiasta i okolic. Jednak na życzenie dostarczymy pojazd w pozostałych częściach kraju. Czym rónimy się od konkuręcji? Indywidualnym podejściem do każdego klienta, jakością obsługi jak i dospępem do ciekawych samochodów. Obsługujemy klientów indywidualnych jak i firmy. Zapewniamy bezpieczeństwo i jasne zasady wynajmu.</p>
                </div>
                <div className="about-page-availability">
                    <p className="about-page-availability-table-title">Jesteśmy otwarci codziennie 8:00 - 20:00</p>
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
