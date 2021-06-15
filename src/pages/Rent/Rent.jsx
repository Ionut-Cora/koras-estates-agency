import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
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
                                            <img
                                                className="d-block w-100"
                                                src={product.image1}
                                                alt="Property pic"
                                            />
                                    </div>
                                    <div className="product-details">
                                        <h3>{product.address}</h3>
                                        <p>{product.shortdescription}</p>
                                        <p>{product.price}</p>
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
