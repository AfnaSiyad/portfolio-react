import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
     <About/>
     <Services/>
     <Counter/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
