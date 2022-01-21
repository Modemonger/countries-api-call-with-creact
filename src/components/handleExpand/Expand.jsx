import React from 'react'

const Expand = ({country, handleLoseFocus}) => {
    //console.log(country);
    let capital;
    let reagions;
    let timezones;
    let languages;
    let currencies;

    if(country.capital){
        capital = <p>The capital of {country.name.common} is {country.capital}.</p>
    }

    if(country.continents){
        let con = [];
        country.continents.forEach(elem => {
            con.push(' ',elem);
        });

        reagions = <p>They are considered part of these regions{con}.</p>;
    }

    if(country.timezones){
        let time = [];
        country.timezones.forEach(elem => {
            time.push(' ',elem);
        });

        timezones = <p>The country belongs in these timezones{time}.</p>;
    }

    if(country.languages){
        let lang = [];
        Object.values(country.languages).forEach(value => {
            lang.push(' ',value);
        });
        
        languages  = <p>They speak these languages{lang}.</p>;
    }
    
    if(country.currencies){
        let cur = [];
        Object.values(country.currencies).forEach(value => {
            cur.push(' ',value.name);
        });

        currencies = <p>The accepted currencies are{cur}</p>;
    }
    
    let output = <div className='background'>
                    <div className='countryInfo'>
                        <img src={country.flags.svg} alt="" />
                        <h2>{country.name.common}</h2>
                        <p>{capital}</p>
                        <p>{reagions}</p>
                        <p>The population curently is {country.population}.</p>
                        <p>{timezones}</p>
                        <p>{languages}</p>
                        <p>{currencies}</p>
                    </div>
                </div>;

    return (
        <div className='info' onClick={handleLoseFocus}>
            {output}
        </div>
    )
}
export default Expand;