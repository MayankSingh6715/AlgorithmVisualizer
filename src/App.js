import Navbar from "./component/Navbar";
import About from "./component/home/About";
import Home from "./component/home/Home";
import Sort from "./component/sort/Sort";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
    </Router>    
    </>
  );
}

export default App;
