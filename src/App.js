import "bootstrap/dist/css/bootstrap.min.css";
// // import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
import { NavbarM } from "./Components/Navbar";
import { HomePageCarousel } from "./Components/HomePageCarousel";
import { FeaturedCol } from "./Components/FeaturedCol";
import { Gallery } from "./Components/Gallery";
import { Footer } from "./Components/Footer";
// ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import {HomePage} from './pages/HomePage'
import {IndProd} from './pages/IndProd'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={IndProd} />
        {/* <Route  path = "*" component = {() => <h2>404 page not found</h2>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
