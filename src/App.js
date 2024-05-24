import NavBar from "./compontes/navBar";
import Home from "./home";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Create from "./create";
import BolgDetails from "./BlogDetails";
import NotFound from "./notfound";


function App() {
  const title="App  component";
  const likes=50;

  return (
    <Router>
    <div  className="App" style={{alignItems: 'center'}}>
      <NavBar/>
      <div className="content">
        <Switch>
          <Route  exact path="/" >
            <Home/>

          </Route>

          <Route exact path ="/create">

            <Create/>

          </Route >
          <Route exact path="/blogs/:id">
            <BolgDetails/>

          </Route>
          <Route path="*">
          <NotFound/>
          </Route>

        </Switch>

    </div>
    </div>
    </Router>
  );
}

export default App;
