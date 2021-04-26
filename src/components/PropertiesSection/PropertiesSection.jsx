import React from 'react';
import { Link } from 'react-router-dom';
import rentPicture from '../../images/rent.jpg';
import buyPicture from '../../images/buy.jpg';
import './PropertiesSection.css';

function PropertiesSection() {
    return(
        <div className="properties-section container">
            <div className="d-flex flex-column">
                <div className="properties-item d-flex align-items-center">
                    <img className="w-50" src={rentPicture} alt="rent properties"/>
                    <div className="properties-details w-50">
                        <h3>Rent Properties</h3>
                        <Link to="/rent">
                            <button>More properties for rent</button>                       
                        </Link>
                    </div>
                </div>
                <div className="properties-item d-flex align-items-center">
                    <div className="properties-details w-50">
                        <h3>Buy Properties</h3>
                        <Link to="/buy">
                            <button>More properties to buy</button>                       
                        </Link>
                    </div>
                    <img className="w-50" src={buyPicture} alt="buy properties"/>
                </div>
            </div>
        </div>
    )
}

export default PropertiesSection;