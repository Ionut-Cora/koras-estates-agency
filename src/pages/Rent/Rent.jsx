import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import Carousel from 'react-bootstrap/Carousel';
import '../Buy/BuyRent.css';

function Rent() {
    return(
        <div>
            <Layout>
                <div className="buy-rent container">
                    <h1>Properties for rent</h1>
                    <div>
                        {products.rent.map((product) => (       
                            <div key={product.id}>
                                <div className="product-section d-flex flex-column align-items-center">
                                    <div className="w-75">
                                            {/* <img
                                                className="d-block w-100"
                                                src={product.image1}
                                                alt="Property pic"
                                            /> */}
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image1}
                                                        alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image2}
                                                        alt="Second slide"
                                                    />

                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image3}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image4}
                                                        alt="Fourth slide"
                                                    />

                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image5}
                                                        alt="Fifth slide"
                                                    />

                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                    </div>
                                    <div className="product-details">
                                        <h3>{product.address}</h3>
                                        <p>{product.longdescription}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="interest-section">
                        <h4>Interested in one of the above properties?</h4>
                        <p>Call Koras</p>
                        <a href="tel:020 3030 4040">020 3030 4040</a>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Rent;
