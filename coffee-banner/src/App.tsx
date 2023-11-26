import Context from './context/context'
import Home from './pages/home'

function App() {
  
  const initialValue = {
    coffeeType: "",
    width: 300,
    title: "",
    description: ""
}

  return (
    <Context.Provider value={initialValue}>
      <Home></Home>
    </Context.Provider>
  )
}

export default App
