import { useState } from 'react';

const CustomizeTitle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event:any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event:any) => {
    setDescription(event.target.value);
  };

  return (
    <div className="customize-title">
      <h3>Customize title and description</h3>

      <div className="customize-title-options-container">
        <div className="customize-title-input">
            <label>
                Title:
                <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter your comment"
                />
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

      <button>View and copy code</button>
    </div>
  );
};

export default CustomizeTitle;
