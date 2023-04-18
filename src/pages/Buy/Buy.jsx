import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import MortgageCalculator from '../../components/MortgageCalculator/MortgageCalculator';
import './BuyRent.css';

function Buy() {
    return(
        <div>
            <Layout>
                <div className="buy-rent">
                    <div className='container py-5'>
                        <h1 className='text-capitalize mb-3 mb-md-5 mt-0 mt-md-2'>
                            <strong>Properties for sale</strong>
                        </h1>
                        <div className='row'>
                            {products.buy.map((product) => (
                                <div className='col-12 col-lg-6 my-3' key={product.id}>
                                    <Card className="product-section d-flex flex-column align-items-center h-100 shadow">
                                        <div className="">
                                                <Carousel slide={false} interval={null}>
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
                                        <Card.Body className="product-details d-flex flex-column align-items-start p-4">
                                            <Card.Text className='rooms mb-2'>
                                                <strong>{product.rooms}</strong>
                                            </Card.Text>
                                            <Card.Title className='text-light mb-2'>
                                                <strong>{product.price}</strong>
                                            </Card.Title>
                                            <Card.Text className='text-light address mb-4'>
                                                <strong>{product.address}</strong>
                                            </Card.Text>
                                            <Card.Text className='text-light text-left'>{product.longdescription}</Card.Text>                                      
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <MortgageCalculator />

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

export default Buy;
