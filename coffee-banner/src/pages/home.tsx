import Description from "../components/description";
import Generator from "../components/generator";
import Header from "../components/header";
import Preview from "../components/preview";
import Swiper from "../components/swiper";
import useGetData from "../hooks/useGetData";

function Home() {
  const { data: hotCoffee } = useGetData("hot");
  const { data: iceCoffee } = useGetData("iced");
  
  return (
    <div className="home">
      <Header></Header>
      <Description></Description>
      <Swiper></Swiper>
      <Preview></Preview>
    </div>
  );
}

export default Home;
