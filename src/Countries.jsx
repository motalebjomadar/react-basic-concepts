import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        console.log('Add this country to your visited list');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = flag => {
      const newVisitedFlags = [...visitedFlags, flag] 
      setVisitedFlags(newVisitedFlags); 
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h5>Visited Countries: {visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>

                <div className='flag-container'>
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
                </div>


            <div className='countries'>
            {
                countries.map(country => <Country
                 key={country.cca3}
                 handleVisitedFlags={handleVisitedFlags}
                 handleVisitedCountries={handleVisitedCountries}
                 country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;