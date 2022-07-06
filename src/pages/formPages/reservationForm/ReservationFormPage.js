import '../../../App'

import './ReservationFormPage.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ReservationFormPage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v2gccfm', 'template_ondj6bg', form.current, '7CV5Ex76aHLLYIHvO')
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
                <input type="text" name="from_name" className='reservation-text-input' placeholder='Imię' />
                <label className='reservation-form-label'>Email</label>
                <input type="email" name="user_email" className='reservation-text-input' placeholder='Email' />
                <label className='reservation-form-label'>Telefon</label>
                <input type="text" name="phone_number" className='reservation-text-input' placeholder='Telefon' />
                <label className='reservation-form-label'>Samochód</label>
                <input type="text" name="car" className='reservation-text-input' placeholder='Samochód' />
                <label className='reservation-form-label'>Kiedy</label>
                <input type="text" name="dates" className='reservation-text-input' placeholder='Daty od-do' />
                <label className='reservation-form-label'>Miejsce odbioru</label>
                <input type="text" name="pickup-place" className='reservation-text-input' placeholder='Siedziba Luo Cars' />
                <label className='reservation-form-label'>Wiadomość</label>
                <textarea name="message" className='reservation-text-input-big' placeholder='Dodatkowa wiadomość' />
                <input type="submit" value="Wyślij" className='reservation-submit-button' />
            </form>
        </div>
    );
}

export default ReservationFormPage;
