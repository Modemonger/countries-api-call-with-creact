import React, { useState, useEffect } from 'react';
import axios from 'axios';
//data

//components
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
//style
import './App.css';
function App() {

  const [data, setData] = useState('');
  const [countries, setCountries] = useState(data);
  const [loading, setLoading] = useState(true);

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
    let tmp = data.filter(data => data.continents[0] === continent);
    setCountries(tmp);
  }

  if(loading) return "loading...";

  return (
    <div className="App">
      <Continents data={data} handleClick={handleClick}/>
      <Countries data={data} countries={countries}/>
    </div>
  );
}

export default App;
