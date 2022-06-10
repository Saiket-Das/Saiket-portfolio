import React from 'react';
import emailjs from "emailjs-com";
import { useRef } from 'react';
import { toast } from 'react-toastify';

import './Contact.css'


const SERVICE_ID = "service_e6th897";
const TEMPLATE_ID = "template_983fj7i";
const USER_ID = "D0L8jQZKYdIy2Clcb"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        console.log(e)
        e.preventDefault();
        console.log(e)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then(
                (result) => {
                    console.log(result.text);
                    toast("Email send")
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast("FAILED...", error);
                }
            );
    };



    return (



        <section id='contact'>

            <div className='contact-me'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <div className="pageTitle title ">
                        Conatct me
                    </div>

                    <input type="text" name="user_name"
                        className="name formEntry" placeholder="Your name"
                    />

                    <input type="text" name="user_email" className="email formEntry" placeholder="Your email" />

                    <textarea className="message formEntry" name="message" placeholder="Message"></textarea>

                    <input className="submit formEntry" type="submit" value="Send" />
                </form>
            </div>
        </section>




    );
};

export default Contact;
