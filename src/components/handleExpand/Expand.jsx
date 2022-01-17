import React from 'react'

const Expand = ({country, handleLoseFocus}) => {
    //console.log(country);
    
    let output = <div className='background'>
                    <div className='countryInfo'>
                        <img src={country.flags.svg} alt="" />
                        <h2>{country.name.common}</h2>
                        <p>The capital of {country.name.common} is {country.capital}.</p>
                        <p>It is part of the {country.continents[0]} continent.</p>
                        <p>The population curently is {country.population}.</p>
                        <p>The country beongs in these timezones {country.timezones}.</p>
                    </div>
                </div>;

    return (
        <div className='info' onClick={handleLoseFocus}>
            {output}
        </div>
    )
}
export default Expand;