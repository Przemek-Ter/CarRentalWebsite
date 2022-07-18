import '../../App'

import './ContactUsPageStyle.css'

//Video for the background
import AmgA45Vid from "../../videos/amg-a45.mp4"

import ContactCards from '../../components/contactCards/ContactCards';


function ContactUsPage() {
    return (
        <div id="contact-us-section" >
            <div className="contact-us-background">
                <video autoPlay loop muted>
                    <source src={AmgA45Vid} type='video/mp4' />
                </video>
            </div>
            <ContactCards />
        </div>
    );
}

export default ContactUsPage;
