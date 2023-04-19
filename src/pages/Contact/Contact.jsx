import React from 'react';
import Layout from '../../components/Layout/Layout';
import office from '../../images/office.jpg';
import MortgageCalculator from '../../components/MortgageCalculator/MortgageCalculator';
import './Contact.css';

function Contact() {
    return(
        <div>
            <Layout>
                <div className="contact container my-5">
                    <div className="row flex-column-reverse flex-lg-row h-100 pt-5">
                        <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
                            <img className='shadow' src={office} alt="office"/>
                        </div>
                        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <h1 className='text-capitalize mb-3'>
                                <strong>Contact us</strong>
                            </h1>
                            <p className='text-left mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perferendis dolore ad porro praesentium aperiam numquam quia voluptates, atque consectetur facilis aspernatur vero accusantium ipsum beatae nostrum expedita sequi aut!</p>
                            <div className='mb-2'>
                                <span className='mx-1'>
                                    <ion-icon name="call-outline"></ion-icon>
                                </span>
                                <a className='mx-1 text-dark' href="tel:020 3030 4040">020 3030 4040</a>
                            </div>
                            <div className='mb-2'>
                                <span className='mx-1'>
                                    <ion-icon name="mail-outline"></ion-icon>
                                </span>
                                <a className='mx-1 text-dark' href="mailto:koras.agency@gmail.com">koras.agency@gmail.com</a>
                            </div>
                            <div className='d-flex'>
                                <span className='mx-1'>
                                    <ion-icon name="location-outline"></ion-icon>
                                </span>
                                <p className='mx-1'>1 Street Name, London FA1 1LO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light">
                    <MortgageCalculator />
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
