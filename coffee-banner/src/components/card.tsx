import logo from './../assets/thinkit_logo.png'

const Card = () => {
    return (
      <div className="card">
        <h2>Latte</h2>
        <div className="container">
            <div className="item"><p>A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.</p></div>
            <div className="item"><img  src="https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg" alt="Logo"></img></div>
        </div>
        <div className='ingredients'>
            <div className='ingredient'>Esspresso</div>
            <div className='ingredient'>Milk</div>
        </div>
      </div>
    );
  };
  
  export default Card;
  