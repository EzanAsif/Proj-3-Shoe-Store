import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import {NavbarM} from './Components/Navbar'
import {HomePageCarousel} from './Components/HomePageCarousel'
import {FeaturedCol} from './Components/FeaturedCol'
import {Gallery} from './Components/Gallery'
import {Footer} from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavbarM/>
      <HomePageCarousel/>
      <FeaturedCol/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
