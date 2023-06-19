import React, { useEffect, useState } from 'react';
import './Home.css'
import Country from '../Country/Country';

const Home = () => {
    const [Countries, setCountries] = useState([]);

    useEffect(() => {
        const URL = `https://restcountries.com/v3.1/all`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setCountries(data))
    })

    return (
        <div className='home-container'>
            <h1>Countries: {Countries.length}</h1>
            <div className="home-container-props">
                {
                    Countries.map(country => (
                        <Country key={country.name.common} country={country}></Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;