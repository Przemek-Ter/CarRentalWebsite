import '../../../App'

import './QuestionFormPage.css';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


function QuestionFormPage() {

    const form = useRef();
    const [isVeryfied, setIsVeryfied] = useState(false);


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

                <div className='reservation-recaptcha'>
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={() => setIsVeryfied(true)} />
                    {/* <ReCAPTCHA sitekey="6LdK8N0hAAAAAFG_iWxeYC6Buu2WKM-qS17MkDzW" onChange={() => setIsVeryfied(true)} />, */}
                </div>

                <input type="submit" value="Wyślij" className={isVeryfied ? 'submit-button' : 'invisible'} />
            </form>
        </div>
    );
}

export default QuestionFormPage;

