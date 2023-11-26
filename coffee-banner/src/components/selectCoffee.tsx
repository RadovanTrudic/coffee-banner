import { useState } from 'react';

const SelectCoffee = () => {
  const [selectedTemperature, setSelectedTemperature] = useState('');
  const [selectedCoffeeType, setSelectedCoffeeType] = useState('');

  const handleTemperatureChange = (event:any) => {
    setSelectedTemperature(event.target.value);
  };

  const handleCoffeeTypeChange = (event:any) => {
    setSelectedCoffeeType(event.target.value);
  };

  return (
    <div className="selectCoffee">
      <h3>Select your coffee</h3>

      <div className="options-container">
        <div className="temperature-options">
          <label>
            <input
              type="radio"
              value="ice"
              checked={selectedTemperature === 'ice'}
              onChange={handleTemperatureChange}
            />
            Ice Coffee
          </label>

          <label>
            <input
              type="radio"
              value="hot"
              checked={selectedTemperature === 'hot'}
              onChange={handleTemperatureChange}
            />
            Hot Coffee
          </label>
        </div>

        <div className="coffee-type-select">
          <label>
            <select value={selectedCoffeeType} onChange={handleCoffeeTypeChange}>
              <option value="">Select...</option>
              <option value="cappuccino">Cappuccino</option>
              <option value="latte">Latte</option>
              {/* Add more coffee types as needed */}
            </select>
          </label>
        </div>
      </div>

      <button>Update coffee type</button>
    </div>
  );
};

export default SelectCoffee;
