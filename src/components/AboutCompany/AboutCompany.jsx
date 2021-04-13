import React from 'react';
import { Link } from 'react-router-dom';
import './AboutCompany.css';

function AboutCompany() {
    return(
        <div className="about-section container p-5">
            <h2>About Company</h2>
            <p>Founded in 1955, this company try the best for his clients.</p>
            <Link to="/about">
                <button>Find more about us</button>
            </Link>
        </div>
    )
}

export default AboutCompany;