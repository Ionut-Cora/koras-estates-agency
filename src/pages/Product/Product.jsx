import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const productIdUrl = this.props.match.params.productId;
        // console.log(productIdUrl);

        const productValues = Object.values(products);
        // console.log(productValues);

        let currentProduct;

        productValues.forEach((prod) => {
            const findResult = prod.find((item) => {
                // console.log(productIdUrl, item.id);

                return Number(productIdUrl) === item.id;
            })

            if (findResult !== undefined) {
                currentProduct = findResult;
            }
        })

        // console.log(currentProduct);

        this.setState({product: currentProduct});
    }

    render() {
        // console.log(this.props);
        // console.log(this.state.product);
        const {id, address, price, longdescription, image1, image2, image3, image4, image5} = this.state.product;

        return(
            <div>
                <Layout>
                    <div className="property-details container">
                        <div className="w-75">
                            <h1>{address}</h1>
                            <div className="property-image">
                                <Link to={`/product/${id}`}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={image1}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={image2}
                                                alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={image3}
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={image4}
                                                alt="Fourth slide"
                                            />

                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={image5}
                                                alt="Fifth slide"
                                            />

                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>                                       
                                </Link>
                            </div>
                        </div>
                        <div className="property-description">
                            <p>{price}</p>
                            <p>{longdescription}</p>
                        </div>
                        <div>
                            <h4>Interested in this property?</h4>
                            <p>Call Koras</p>
                            <p>020 3030 4040</p>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Product;

