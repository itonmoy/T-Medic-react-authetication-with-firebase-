import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/services">
          {/* <ServiceDepts></ServiceDepts> */}
        </Route>
        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </AuthProvider>
  </div>
  );
}

export default App;
