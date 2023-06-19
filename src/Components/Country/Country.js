import React from 'react';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, flags } = props.country;

    return (
        <div className='country-container'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <Link to={`/country/${name}`}>Show Details of {name.common}</Link>
            <br />
            <button>Details</button>
        </div>
    );
};

export default Country;