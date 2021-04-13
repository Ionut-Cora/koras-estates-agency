import React from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
    return(
        <div className="contact-section container p-5">
            <h2>Contact us</h2>
            <p>You can find us at our office in London.</p>
            <Link to="/contact">
                <button>Contact us</button>
            </Link>
        </div>
    )
}

export default ContactSection;