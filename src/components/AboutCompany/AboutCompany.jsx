import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AboutCompany.css';

function AboutCompany() {
    return(
        <div className="about-section py-5">
            <div className="container">
                <h2 className='text-capitalize text-light mb-3'>
                    <strong>About company</strong>
                </h2>
                <p className='text-light mb-5'>Founded in 1955, this company try the best for his clients. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit saepe tenetur, tempora quas libero eum labore consequuntur quo odit! Quas vel vitae corrupti suscipit consequatur distinctio nemo, quam, alias delectus blanditiis quaerat similique voluptatum sit provident facere perspiciatis commodi!</p>
                <Link to="/about">
                    <Button className='rounded-0 text-uppercase shadow' variant='light' size='lg'>Find more about us</Button>
                </Link>
            </div>
        </div>
    )
}

export default AboutCompany;