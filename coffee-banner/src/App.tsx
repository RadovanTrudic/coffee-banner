import { BannerProvider } from './context/context';
import Home from './pages/home';

function App() {
  return (
    <BannerProvider>
      <Home></Home>
    </BannerProvider>
  );
}

export default App;
