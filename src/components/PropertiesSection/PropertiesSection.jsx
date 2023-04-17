import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import rentPicture from '../../images/rent.jpg';
import buyPicture from '../../images/buy.jpg';
import './PropertiesSection.css';

function PropertiesSection() {
    return(
        <div className="properties-section container py-5">
            <div className="d-flex flex-column">
                <div className="properties-item d-flex align-items-center flex-column-reverse flex-lg-row mb-5 mb-lg-0 p-0 px-lg-5 py-lg-3 p-xl-5">
                    <img className='shadow' src={rentPicture} alt="rent properties"/>
                    <div className="properties-details d-flex flex-column align-items-center justify-content-center px-3 pt-0 pb-5 p-lg-5 ">
                        <h2 className='text-capitalize'>
                            <strong>Rent a property</strong>
                        </h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta voluptatibus quod eveniet ea libero facere ipsam ex ab earum.</p>
                        <Link to="/rent">
                            <Button className='rent-btn m-2 my-md-0 rounded-0 border-0 text-uppercase shadow' variant='dark' size='lg'>Rent a property</Button>                       
                        </Link>
                    </div>
                </div>
                <div className="properties-item bg-dark text-light d-flex align-items-center flex-column flex-lg-row p-0 px-lg-5 py-lg-3 p-xl-5">
                    <div className="properties-details d-flex flex-column align-items-center justify-content-center px-3 py-5 p-lg-5">
                        <h2 className='text-capitalize'>
                            <strong>Buy a property</strong>
                        </h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nemo nobis minima atque sunt iure, ullam, fugit nam rerum soluta dolores! Natus magni laudantium consequuntur quia, iusto earum officia aperiam?</p>
                        <Link to="/buy">
                            <Button className='m-2 my-md-0 rounded-0 text-uppercase shadow' variant='outline-light' size='lg'>Buy a property</Button>                       
                        </Link>
                    </div>
                    <img className='shadow' src={buyPicture} alt="buy properties"/>
                </div>
            </div>
        </div>
    )
}

export default PropertiesSection;