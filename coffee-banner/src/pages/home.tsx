import Description from "../components/description";
import Header from "../components/header";

function Home() {
  //const { data: cryptoList, loading, error } = useGetAllData();
  
  return (
    <div className="home">
      <Header></Header>
      <Description></Description>
    </div>
  );
}

export default Home;
