import React from 'react';
import Layout from '../../components/Layout/Layout';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import AboutImg from '../../images/about-img.jpg';
import './About.css';

function About() {
    return(
        <div>
            <Layout>
                <div className="about-page container py-5">
                    <div className='row py-5' id="about">
                        <div className="col-12 col-lg-6">
                            <div className='d-flex flex-column align-items-center justify-content-center px-0 px-lg-5'>
                                <h1 className='text-capitalize mb-3'>
                                    <strong>About us</strong>
                                </h1>
                                <p className='text-left'>Founded in 2005, this small family business tries its best for its customers. We aim to expand in the coming years, to help as many people as possible who want to either rent a property or buy their own house.</p>
                                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias fugit illo molestias obcaecati, facilis reiciendis harum blanditiis. Ratione sequi mollitia ipsam consequatur dolorum reiciendis qui delectus soluta voluptates. Minus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className='h-100 d-flex align-items-center justify-content-center px-0 px-lg-5'>
                                <img className='w-100 mt-4 mt-lg-0' src={AboutImg} alt="about img" />
                            </div>
                        </div>                       
                    </div>

                    <ReviewForm />
                </div>
            </Layout>
        </div>
    )
}

export default About;
