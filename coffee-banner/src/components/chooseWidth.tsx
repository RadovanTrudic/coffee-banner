import { useState, useContext } from 'react';
import Context from './../context/context';

const ChooseWidth = () => {
  const [selectedWidth, setSelectedWidth] = useState('');
  const [customWidth, setCustomWidth] = useState(0);
  const contextValue = useContext(Context);

  const handleWidthChange = (event:any) => {
    setSelectedWidth(event.target.value);

    console.log(contextValue)
  };

  const handleCustomWidthChange = (event:any) => {
    // Ensure only numbers are entered and limit to 3 digits
    const inputValue = event.target.value.replace(/\D/g, '').slice(0, 3);
    setCustomWidth(inputValue);
  };

  const handleUpdateWidth = () => {
    contextValue.width = selectedWidth === "custom" ? Number(customWidth) : Number(selectedWidth)
  };

  return (
    <div className="choose-width">
      <h3>Choose your width</h3>

      <div className="options-container">
        <div className="width-options">
          <label>
            <input
              type="radio"
              value="160"
              checked={selectedWidth === '160'}
              onChange={handleWidthChange}
            />
            160px
          </label>

          <label>
            <input
              type="radio"
              value="300"
              checked={selectedWidth === '300'}
              onChange={handleWidthChange}
            />
            300px
          </label>

          <label>
            <input
              type="radio"
              value="1000"
              checked={selectedWidth === '1000'}
              onChange={handleWidthChange}
            />
            100%
          </label>

          <label>
            <input
              type="radio"
              value="custom"
              checked={selectedWidth === 'custom'}
              onChange={handleWidthChange}
            />
            custom
          </label>
        </div>

        {selectedWidth==="custom" &&
            <div className="comment-input">
            <input
                type="number"
                value={customWidth}
                min={0}
                max={1000}
                placeholder="Enter your width in pixels"
                onChange={handleCustomWidthChange}
              />
          </div>
        }
      </div>

      <button onClick={handleUpdateWidth}>Update width</button>
    </div>
  );
};

export default ChooseWidth;
