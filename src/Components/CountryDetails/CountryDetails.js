import React, { useEffect, useState } from 'react';
import './CountryDetails.css';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
  
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {
            setCountry(data)})
    }, [name])

    console.log(country);
  
    return (
      <div>
        <h2>Country Details: {name}</h2>
      </div>
    );
  };
  
  export default CountryDetails;
  
