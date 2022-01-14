import React from 'react'

const Continents = ({data, handleClick}) => {

    console.log(data);
    let output = [];

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
        output.push(<button key = "all" onClick = {(event) => handleClick(event, 'all')}>View All</button>);
    }
    
    return (
        <div>
            {output}
        </div>
    )
}
export default Continents;