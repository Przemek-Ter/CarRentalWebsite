import '../../../App'

import './ReservationFormPage.css'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


function ReservationFormPage() {

    const form = useRef();
    const [isVeryfied, setIsVeryfied] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v2gccfm', 'template_v8qltqi', form.current, '7CV5Ex76aHLLYIHvO')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='reservation-form-container'>
            <form ref={form} onSubmit={sendEmail} className="reservation-form">
                <label className='reservation-form-label'>Imię</label>
                <input type="text" name="from_name" className='reservation-text-input' placeholder='Imię Nazwisko' />

                <label className='reservation-form-label'>Email</label>
                <input type="email" name="user_email" className='reservation-text-input' placeholder='Email' />

                <label className='reservation-form-label'>Telefon</label>
                <input type="tel" name="user_phone" className='reservation-text-input' placeholder='Telefon' pattern='[09]{9}' />

                <label className='reservation-form-label'>Samochód</label>
                <select name="selected_car" className='reservation-form-dropdown'>
                    <option value={"none"}>Wybierz</option>
                    <option value={"Ford Mustang"}>Ford Mustang</option>
                    <option value={"BMW Z4"}>BMW Z4</option>
                    <option value={"Range Rover Velar"}>Range Rover Velar</option>
                    {/* <option value={"Audi A4"}>Audi A4</option> */}
                </select>

                <label className='reservation-form-label'>Kiedy</label>
                <div className='reservation-form-dates-space'>
                    <div className="reservation-form-dates-space-start">
                        <label className='reservation-form-label-date'>Od:</label>
                        <input type="date" name="start_date" className='reservation-date-input-start' placeholder='Daty od-do' />
                    </div>
                    <div className="reservation-form-dates-space-end">
                        <label className='reservation-form-label-date'>Do:</label>
                        <input type="date" name="end_date" className='reservation-date-input-end' placeholder='Daty od-do' />
                    </div>
                </div>

                <label className='reservation-form-label'>Miejsce odbioru</label>
                <input type="text" name="pickup_place" className='reservation-text-input' value={'Siedziba Luo Cars'} />
                <label className='reservation-form-small-note'>*W promieniu 10km od siedziby dowóz darmowy</label>

                <label className='reservation-form-label'>Wiadomość</label>
                <textarea name="message" className='reservation-text-input-big' placeholder='Dodatkowa wiadomość' />

                <div className='reservation-recaptcha'>
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={() => setIsVeryfied(true)} />
                    {/* <ReCAPTCHA sitekey="6LdK8N0hAAAAAFG_iWxeYC6Buu2WKM-qS17MkDzW" onChange={() => setIsVeryfied(true)} />, */}
                </div>

                <input type="submit" value="Wyślij" className={isVeryfied ? 'reservation-submit-button' : 'invisible-reservation'} />
            </form>
        </div>
    );
}

export default ReservationFormPage;
