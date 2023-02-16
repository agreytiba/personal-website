
import Container from 'react-bootstrap/esm/Container';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navbar from "./components/Navbar"
import Projects from './components/Projects';
import Service from './components/Service';
import Footer from './components/Footer';
function App() {
  return (
    <Container className='bg-dark app px-md-5'> 
      <Navbar/>
      <Header />
      <Service />
      <About />
      <Projects />
     <Footer />
    </Container>

 
  );
}

export default App;
