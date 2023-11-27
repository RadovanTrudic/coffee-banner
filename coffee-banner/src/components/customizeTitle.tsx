import { useContext, useEffect, useState } from 'react';
import { BannerContext } from '../context/context';

const CustomizeTitle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { banner, setBanner } = useContext(BannerContext);

  useEffect(() => {
    setTitle(banner.coffee.title);
    setDescription(banner.coffee.description);
  }, [banner.coffee.description, banner.coffee.title]);

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleUpdateTitleAndDescription = () => {
    const updatedCoffee = { ...banner.coffee };
    updatedCoffee.description = description;
    updatedCoffee.title = title;
    setBanner((prev: any) => ({ ...prev, coffee: updatedCoffee }));
  };

  return (
    <div className="customize-title">
      <h3>Customize title and description</h3>

      <div className="customize-title-options-container">
        <div className="customize-title-input">
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter your comment" />
          </label>
        </div>
        <div className="customize-title-input">
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter your comment"
            />
          </label>
        </div>
      </div>

      <button onClick={handleUpdateTitleAndDescription}>View and copy code</button>
    </div>
  );
};

export default CustomizeTitle;
