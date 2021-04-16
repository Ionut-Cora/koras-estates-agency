import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';

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
        const {address, price} = this.state.product;

        return(
            <div>
                <Layout>
                    <div>
                        <h2>{address}</h2>
                        <p>{price}</p>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Product;

