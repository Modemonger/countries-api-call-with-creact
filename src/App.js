import React, { useState, useEffect } from 'react';
import axios from 'axios';
//data

//components
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Expand from './components/handleExpand/Expand';
import Search from './components/search/Search';
//style
import './style.css';

function App() {

  const [data, setData] = useState('');
  const [countries, setCountries] = useState(data);
  const [loading, setLoading] = useState(true);
  const [showMoreState, setShowMoreState] = useState(false);
  const [country, setCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      axios('https://restcountries.com/v3.1/all')
      .then(response => {
          setData(response.data);
          setCountries(response.data);
      })
      .catch(error => {
          console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  function handleClick(e,continent){
    e.preventDefault();
    setSearchQuery('');
    let tmp;
    if(continent !== 'all'){
      tmp = data.filter(data => data.continents[0] === continent);
    }
    else tmp = data;
    setCountries(tmp);
  }

  function handleExpand(e, expand){
    e.preventDefault();
    //console.log(expand);
    setCountry(expand);
    setShowMoreState(!showMoreState);
  }

  function handleLoseFocus(e){
    e.preventDefault();
    setShowMoreState(false);
  }

  function handleSearch(e){
    e.preventDefault();
    let tmpCountries = data.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      if(countryName.includes(searchQuery)){
        //console.log(country);
        return country;
      }
      if(searchQuery == ''){
        setCountries(data);
      }
    })
    //console.log(tmpCountries);
    setCountries(tmpCountries);
    //console.log(searchQuery);
  }

  if(loading){
    return (
        
        "loading..."

    );
  }

  return (
    <div className="App">
      <Search countries={countries} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={(event) => handleSearch(event, country, searchQuery)}/>
      <Continents data={data} handleClick={handleClick}/>
      {showMoreState ? 
        <Expand country={country} handleLoseFocus={handleLoseFocus}/>:
        null
      }
      <Countries countries={countries} handleExpand={handleExpand}/>
    </div>
  );
}

export default App;
