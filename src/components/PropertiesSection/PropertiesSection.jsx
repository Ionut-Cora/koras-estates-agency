import React from 'react';
import { Link } from 'react-router-dom';
import rentPicture from '../../images/rent.jpg';
import buyPicture from '../../images/buy.jpg';
import './PropertiesSection.css';

function PropertiesSection() {
    return(
        <div className="properties-section container p-5">
            <h2>Properties Section</h2>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center p-5">
                    <img className="w-50" src={rentPicture} alt="rent properties"/>
                    <div className="w-50">
                        <h3>Rent Properties</h3>
                        <Link to="/rent">
                            <button>More properties for rent</button>                       
                        </Link>
                    </div>
                </div>
                <div className="d-flex align-items-center p-5">
                    <div className="w-50">
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