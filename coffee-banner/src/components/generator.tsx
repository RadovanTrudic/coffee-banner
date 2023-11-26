import Preview from "./preview";
import Swiper from "./swiper";

const Generator = () => {
  return (
    <div className="container">
        <div className="item"><Swiper></Swiper></div>
        <div className="item"><Preview></Preview></div>
    </div>
  );
};

export default Generator;
