import React from 'react'

const Countries = ({countries}) => {
    
    //console.log(countries);
    let output = [];

    if(countries)
    countries.map(country => {
        //console.log(country.name);
        output.push(<div className='countryCard' key={country.name.common}>
                        <p>{country.name.common}</p>
                        <img className='flag' src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                    </div>);
    })

    return (
        <div className='cardContainer'>
            {output}    
        </div>
    )
}
export default Countries;