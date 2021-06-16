import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
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
                <Carousel>
                    <Carousel.Item>                       
                        <img
                        className="head-img d-block w-100"
                        src={header1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="head-title container">
                                <h1>London Estate Agents</h1>
                                <p>London Estate Agents specialising in property for sale and to rent in London.</p>
                                <Link to="/rent">
                                    <button>Rent a property</button>
                                </Link>
                                <Link to="/buy">
                                    <button>Buy a property</button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>              

                    <Carousel.Item>
                        <img
                        className="head-img d-block w-100"
                        src={header2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className="head-title container">
                                <h1>Stunning properties for rent</h1>
                                <Link to="/rent">
                                    <button>Rent a property</button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="head-img d-block w-100"
                        src={header3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="head-title container">
                                <h1>Buy your own property today</h1>
                                <p>We are here to help you</p>
                                <Link to="/buy">
                                    <button>Buy a property</button>
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
