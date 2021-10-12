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
                    <img src={rentPicture} alt="rent properties"/>
                    <div className="properties-details">
                        <Link to="/rent">
                            <button>Rent Properties</button>                       
                        </Link>
                    </div>
                </div>
                <div className="properties-item d-flex align-items-center">
                    <div className="properties-details">
                        <Link to="/buy">
                            <button>Buy Properties</button>                       
                        </Link>
                    </div>
                    <img src={buyPicture} alt="buy properties"/>
                </div>
            </div>
        </div>
    )
}

export default PropertiesSection;