import { useContext, useState } from 'react';
import useGetData from '../hooks/useGetData';
import { Coffee } from '../types/Coffee';
import { BannerContext } from './../context/context';

const SelectCoffee = () => {
  const [selectedTemperature, setSelectedTemperature] = useState('');
  const [selectedCoffeeArray, setSelectedCoffeeArray] = useState<Array<Coffee>>();
  const [selectedCoffeeType, setSelectedCoffeeType] = useState('');
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee>();
  const { data: hotCoffee } = useGetData('hot');
  const { data: iceCoffee } = useGetData('iced');
  const { banner, setBanner } = useContext(BannerContext);

  const handleTemperatureChange = (event: any) => {
    setSelectedTemperature(event.target.value);
    const coffeeArray = event.target.value === 'hot' ? hotCoffee : iceCoffee;
    setSelectedCoffeeArray(coffeeArray!);
  };

  const handleCoffeeTypeChange = (event: any) => {
    setSelectedCoffeeType(event.target.value);
    setSelectedCoffee(selectedCoffeeArray![event.target.value]);
  };

  const handleUpdateCoffee = () => {
    setBanner({ ...banner, coffee: selectedCoffee });
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

        {selectedCoffeeArray && (
          <div className="coffee-type-select">
            <select value={selectedCoffeeType} onChange={handleCoffeeTypeChange}>
              {selectedCoffeeArray?.map((coffee, index) => (
                <option key={coffee.id} value={index}>
                  {coffee.title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {selectedCoffeeType && <button onClick={handleUpdateCoffee}>Update coffee type</button>}
    </div>
  );
};

export default SelectCoffee;
