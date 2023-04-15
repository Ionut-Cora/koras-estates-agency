import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Layout from '../../components/Layout/Layout';
import header1 from '../../images/header1.jpg';
import header2 from '../../images/header2.jpg';
import header3 from '../../images/header3.jpg';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import PropertiesSection from '../../components/PropertiesSection/PropertiesSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import MortgageCalculator from '../../components/MortgageCalculator/MortgageCalculator';
import './Home.css';

function Home() {
    return(
        <div className="head-div">
            <Layout>
                <Carousel className='mt-5'>
                    <Carousel.Item>                       
                        <img className="d-block w-100 vh-100" src={header1} alt="First slide" />
                        <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-center'>
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                                <h1 className='text-capitalize'>London Estate Agents</h1>
                                <p className='mb-5'>London Estate Agents specialising in property for sale and to rent in London. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, soluta.</p>
                                <div id="buttons-div">
                                    <Link to="/rent">
                                        <Button className='m-2 my-md-0 rounded-0 text-uppercase' variant='light' size='lg'>Rent a property</Button>
                                    </Link>
                                    <Link to="/buy">
                                        <Button className='m-2 my-md-0 rounded-0 text-uppercase' variant='outline-light' size='lg' id="buy-button">Buy a property</Button>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>              

                    <Carousel.Item>
                        <img className="d-block w-100 vh-100" src={header2} alt="Second slide" />
                        <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-center'>
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                                <h1 className='text-capitalize'>Stunning properties for rent</h1>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi expedita? Quia tenetur ad ex. Nisi, dolores non nihil ducimus reiciendis deleniti ut culpa asperiores.</p>
                                <Link to="/rent">
                                    <Button className='m-2 my-md-0 rounded-0 text-uppercase' variant='light' size='lg'>Rent a property</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 vh-100" src={header3} alt="Third slide" />
                        <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-center'>
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                                <h1 className='text-capitalize'>Buy your own property today</h1>
                                <p className='mb-5'>We are here to help you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi, quidem animi odit sequi dolorum officia voluptatum nulla deleniti quas!</p>
                                <Link to="/buy">
                                    <Button className='m-2 my-md-0 rounded-0 text-uppercase' variant='outline-light' size='lg' id="buy-button">Buy a property</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <PropertiesSection />

                <AboutCompany />

                <MortgageCalculator />

                <ContactSection />

            </Layout>
        </div>
    )
}

export default Home;
