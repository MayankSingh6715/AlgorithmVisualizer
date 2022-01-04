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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>    
    </>
  );
}

export default App;
