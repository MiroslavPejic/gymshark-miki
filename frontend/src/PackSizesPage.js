import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function PackSizesPage() {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculatePackSizes = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/calculate-pack-sizes",
        {
          numOrdered: parseInt(inputValue, 10) || 0
        }
      );
      setData(response.data.data.packs);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Calculate Pack Sizes</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter order size"
        />
        <p>Order size: {inputValue}</p>
      </div>
      <button onClick={calculatePackSizes}>
        Calculate
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

export default PackSizesPage;