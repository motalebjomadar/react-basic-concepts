import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, capital, area, population, cca3} = country;
    const [visited, setVisited] = useState(false)


    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited':'Non-visited'}`}>
            <h2>Name: {name.common}</h2>
            <img src={flags.png}></img>
            <h2>Capital: {capital}</h2>
            <h3>Area: {area}</h3>
            <h4>Population: {population}</h4>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {visited ? 'I have visited this country':'I want to visit'}
        </div>
    );
};

export default Country;