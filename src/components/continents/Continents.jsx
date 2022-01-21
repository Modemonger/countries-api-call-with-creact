import {useState} from 'react'

const Continents = ({data, handleClick}) => {

    //console.log(data);
    let output = [];

    let copy;

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    
    if(data){
        copy = [...new Set(data.map(country => 
            country.continents[0]
        ))];
        //console.log(copy);
        copy.forEach(continent => {
            output.push(
                <button className='countryButt' key = {continent} onClick = {(event) => handleClick(event,continent)}>{continent}</button>
            )
        });
        output.push(<button className='countryButt' key = "all" onClick = {(event) => handleClick(event, 'all')}>View All</button>);
    }
    
    return (
        <div className='colapsable'>
            <label className='colapseLable' htmlFor="colapse">Select continent</label>
            <button name='colapse' className='colapsButt' onClick={toggleClass}>+</button>
            <div className={`${isActive ? 'colapsed' : 'buttonContainer'}`}>
                {output}
            </div>
        </div>
        
    )
}
export default Continents;