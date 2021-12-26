import Navbar from "./component/Navbar";
import About from "./component/home/About";
import Home from "./component/home/Home";
import Sort from "./component/sort/Sort";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/sort">
            <Sort />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>    
    </>
  );
}

export default App;
