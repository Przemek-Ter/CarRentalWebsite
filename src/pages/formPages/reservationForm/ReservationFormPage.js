import '../../../App'

import './ReservationFormPage.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ReservationFormPage() {

    const form = useRef();

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
                <input type="text" name="from_name" className='reservation-text-input' placeholder='Imię' />
                <label className='reservation-form-small-note'>*Imię i Nazwisko</label>

                <label className='reservation-form-label'>Email</label>
                <input type="email" name="user_email" className='reservation-text-input' placeholder='Email' />

                <label className='reservation-form-label'>Telefon</label>
                <input type="text" name="user_phone" className='reservation-text-input' placeholder='Telefon' />

                <label className='reservation-form-label'>Samochód</label>
                <select name="selected_car" className='reservation-form-dropdown'>
                    <option value={"none"}>Wybierz</option>
                    <option value={"Ford Mustang"}>Ford Mustang</option>
                    <option value={"BMW Z4"}>BMW Z4</option>
                    <option value={"Range Rover Velar"}>Range Rover Velar</option>
                    <option value={"Audi A4"}>Audi A4</option>
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
                <input type="text" name="pickup_place" className='reservation-text-input' placeholder='Siedziba Luo Cars' />
                <label className='reservation-form-small-note'>*W promieniu 10km od siedziby dowóz darmowy</label>

                <label className='reservation-form-label'>Wiadomość</label>
                <textarea name="message" className='reservation-text-input-big' placeholder='Dodatkowa wiadomość' />

                <input type="submit" value="Wyślij" className='reservation-submit-button' />
            </form>
        </div>
    );
}

export default ReservationFormPage;
