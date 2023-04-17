import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ContactSection.css';
import ContactImage from '../../images/contact-img.jpg';

function ContactSection() {
    return(
        <div className="contact-section bg-dark text-light py-5">
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className='col-12 col-lg-6'>
                        <img src={ContactImage} alt="contact img" />
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0'>
                        <h2 className='text-capitalize mb-3'>
                            <strong>Contact us</strong>
                        </h2>
                        <p>You can find us at our office in London. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur cumque aspernatur aliquam deleniti accusamus similique harum quam distinctio quidem!</p>
                        <div className='d-flex justify-content-center mt-4' id="contact-phone">
                            <p className='text-capitalize'>Phone number:</p>
                            <a className='mx-2 text-light' href="tel:020 3030 4040">
                                <strong>020 3030 4040</strong>
                            </a>
                        </div>
                        <div className='d-flex justify-content-center mb-5' id="contact-email">
                            <p className='text-capitalize'>Email address:</p>
                            <a className='mx-2 text-light' href="mailto:koras.agency@gmail.com">
                                <strong>koras.agency@gmail.com</strong>
                            </a>
                        </div>
                        <Link to="/contact">
                            <Button className='rounded-0 text-uppercase shadow' variant='light' size='lg'>Contact us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;