import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  const [data, setData] = useState(0);

  const calculatePackSizes = async () => {
    console.log('inside this function')
    await axios.post(
      "http://localhost:3001/calculate-pack-sizes",
      {
        numOrdered: 200
      }
    )
    .then(response => {
      console.log('res: ', response)
      setData(response.data.data.numOrdered)
    });
  }

  return (
    <div className="App">
      <button 
        onClick={() =>{
          calculatePackSizes();
        }}>
        Click me!
      </button>

      <div>
        <p>Number is: {data}</p>
      </div>
    </div>
  );
}

export default App;
