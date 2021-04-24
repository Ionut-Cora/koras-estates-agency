import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
    return(
        <div className="contact-section">
            <div className="container p-5">
                <div>
                    <h2>Contact us</h2>
                    <p>You can find us at our office in London.</p>
                    <p>Call us</p>
                    <a href="tel:020 3030 4040">020 3030 4040</a>
                    <p>Email us</p>
                    <a href="mailto:koras.agency@gmail.com">koras.agency@gmail.com</a>
                </div>
                <Link to="/contact">
                    <button>Contact us</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactSection;