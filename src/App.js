import NavBar from "./compontes/navBar";
import Home from "./home";
function App() {
  const title="App  component";
  const likes=50;

  return (
    <div  className="App" style={{alignItems: 'center'}}>
      <NavBar/>
      <div className="content">
      <Home/>
    </div>
    </div>
  );
}

export default App;
