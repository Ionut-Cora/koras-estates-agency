import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
    return(
        <div className="contact-section container p-5">
            <h2>Contact us</h2>
            <p>You can find us at our office in London.</p>
            <p>Call us</p>
            <p>020 3030 4040</p>
            <p>Email us</p>
            <p>koras.agency@gmail.com</p>
            <Link to="/contact">
                <button>Contact us</button>
            </Link>
        </div>
    )
}

export default ContactSection;