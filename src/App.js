import React, { useState, useEffect } from 'react';
import axios from 'axios';
//data

//components
import Continents from './components/continents/Continents';
//style
import './App.css';
function App() {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, [])

  if(loading) return "loading...";

  return (
    <div className="App">
      <Continents data={data}/>
    </div>
  );
}

export default App;
