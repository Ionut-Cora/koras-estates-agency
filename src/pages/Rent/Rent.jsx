import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import { Link } from 'react-router-dom';

function Rent() {
    return(
        <div>
            <Layout>
                <div className="container">
                    <h1>Rent</h1>
                    <div>
                        {products.rent.map((product) => (       
                            <div key={product.id}>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="w-50">
                                        <Link to={`/product/${product.id}`}>
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
                                        </Link>
                                    </div>
                                    <h3>{product.address}</h3>
                                    <p>{product.longdescription}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Rent;
