import React from 'react';
import Layout from '../../components/Layout/Layout';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import './About.css';

function About() {
    return(
        <div>
            <Layout>
                <div className="about-page container">
                    <div id="about">
                        <h1>About us</h1>
                        <p>Founded in 2005, this small family business tries its best for its customers.</p>
                        <p>We aim to expand in the coming years, to help as many people as possible who want to either rent a property or buy their own house.</p>
                    </div>

                    <ReviewForm />
                </div>
            </Layout>
        </div>
    )
}

export default About;
