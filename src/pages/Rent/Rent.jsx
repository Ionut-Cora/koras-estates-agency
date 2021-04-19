import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import { Link } from 'react-router-dom';
import '../Buy/BuyRent.css';

function Rent() {
    return(
        <div>
            <Layout>
                <div className="buy-rent container">
                    <h1>Rent</h1>
                    <div>
                        {products.rent.map((product) => (       
                            <div key={product.id}>
                                <div className="product-section d-flex flex-column align-items-center">
                                    <div className="w-75">
                                        <Link to={`/product/${product.id}`}>
                                            <img
                                                className="d-block w-100"
                                                src={product.image1}
                                                alt="Property pic"
                                            />
                                        </Link>
                                    </div>
                                    <div className="product-details">
                                        <h3>{product.address}</h3>
                                        <p>{product.shortdescription}</p>
                                        <p>{product.price}</p>
                                        <Link to={`/product/${product.id}`}>
                                            <button>View more</button>
                                        </Link>
                                    </div>
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
