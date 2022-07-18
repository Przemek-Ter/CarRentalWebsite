import '../../../App'

import './QuestionFormPage.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function QuestionFormPage() {

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
        <div className='form-container'>
            <form ref={form} onSubmit={sendEmail} className="form" >
                <label className='form-label'>Imię</label>
                <input type="text" name="from_name" className='text-input' placeholder='Imię' />

                <label className='form-label'>Email</label>
                <input type="email" name="user_email" className='text-input' placeholder='Email' />

                <label className='form-label'>Wiadomość</label>
                <textarea name="message" className='text-input-big' placeholder='Wiadomość' />

                <input type="submit" value="Wyślij" className='submit-button' />
            </form>
        </div>
    );
}

export default QuestionFormPage;

