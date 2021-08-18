import React from 'react';
import Layout from '../../components/Layout/Layout';
import office from '../../images/office.jpg';
import './Contact.css';

function Contact() {
    return(
        <div>
            <Layout>
                <div className="contact container">
                    <div id="office-image-div">
                        <img id="office-image" src={office} alt="office"/>
                    </div>
                    <div id="office-details-div">
                        <h1>Contact us</h1>
                        <div id="contact-page-phone">
                            <ion-icon name="call-outline"></ion-icon>
                            <a href="tel:020 3030 4040">020 3030 4040</a>
                        </div>
                        <div id="contact-page-email">
                            <ion-icon name="mail-outline"></ion-icon>
                            <a href="mailto:koras.agency@gmail.com">koras.agency@gmail.com</a>
                        </div>
                        <ion-icon name="location-outline"></ion-icon>
                        <p>1 Fake Street London FA1 1LO</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
