import React from 'react'

const Continents = ({data}) => {

    console.log(data);
    let output = [];

    function handleClick(e,continent){
        e.preventDefault();
        console.log(continent);
    }

    let copy;
    
    if(data){
        copy = [...new Set(data.map(country => 
            country.continents[0]
        ))];
        //console.log(copy);
        copy.forEach(continent => {
            output.push(
                <button key = {continent} onClick = {(event) => handleClick(event,continent)}>{continent}</button>
            )
        });
    }
    
    return (
        <div>
            {output}
        </div>
    )
}
export default Continents;