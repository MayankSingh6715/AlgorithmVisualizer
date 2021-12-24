import Navbar from "./component/Navbar";
import About from "./component/About";
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
        </Switch>
    </Router>    
    </>
  );
}

export default App;
