import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculatePackSizes = async () => {
    console.log('inside this function');
    await axios.post(
      "http://localhost:3001/calculate-pack-sizes",
      {
        numOrdered: inputValue
      }
    )
    .then(response => {
      console.log('res: ', response);
      setData(response.data.data.packs);
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }

  return (
    <div className="App">
      <div>
        <h1>Input order size</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Order size: {inputValue}</p>
      </div>
      <button 
        onClick={calculatePackSizes}>
        Click me!
      </button>

      <div>
        <ul>
          {Object.entries(data).map(([packSize, count]) => (
            <li key={packSize}>
              {count} x {packSize}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;