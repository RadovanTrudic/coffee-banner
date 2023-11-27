import { BannerContext } from './../context/context';
import { useContext } from 'react';

const Card = () => {
  const { banner } = useContext(BannerContext);

  return (
    <div className="card" style={{ width: `${banner.width}px` }}>
      <h2>{banner.coffee.title}</h2>
      <div className="container">
        <div className="item">
          <p>{banner.coffee.description}</p>
        </div>
        <div className="item">
          <img src={banner.coffee.image} alt="Logo"></img>
        </div>
      </div>
      <div className="ingredients">
        {Array.isArray(banner.coffee.ingredients) &&
          banner.coffee.ingredients.map((ingredient: any, index: number) => (
            <div className="ingredient" key={index}>
              {ingredient}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
