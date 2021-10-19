import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ServiceDepts from "./components/ServiceDepts/ServiceDepts";



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/Banner">
          
        </Route>
        <Route path="/services">
          <ServiceDepts></ServiceDepts>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
