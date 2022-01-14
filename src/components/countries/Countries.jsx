import React from 'react'

const Countries = ({countries}) => {
    
    //console.log(countries);
    let output = [];

    if(countries)
    countries.map(country => {
        //console.log(country.name);
        output.push(<div key={country.name.common}>{country.name.common}</div>);
    })

    return (
        <div>
            {output}    
        </div>
    )
}
export default Countries;