import React from 'react';
import './Top.css';

function Top() {
    return(
        <div className="container d-flex align-items-center justify-content-between" id="top">
            <div className='d-flex align-items-center' id="top-phone">
                <ion-icon name="call-outline"></ion-icon>
                <p className='mb-0 mx-2'>02030304040</p>
            </div>
            <div id="top-other">
                <span className='mx-1'><ion-icon name="logo-facebook"></ion-icon></span>
                <span className='mx-1'><ion-icon name="mail-outline"></ion-icon></span>
                <span className='mx-1'><ion-icon name="location-outline"></ion-icon></span>               
            </div>
        </div>
    )
}

export default Top;