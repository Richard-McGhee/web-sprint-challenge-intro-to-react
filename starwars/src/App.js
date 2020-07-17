import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState(null);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const getData = () => {
      axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        setCharacterData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.dir(err)
      })
    }
    getData()
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterData={characterData} />
    </div>
  );
}

export default App;
