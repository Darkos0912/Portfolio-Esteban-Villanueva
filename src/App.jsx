import Header from './components/Header';
import Prof from './components/Prof';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css";

function App() {

  return (
    <>
      <div className="col-menu">
        <a href="#" className="close">Inicio</a>
        <a href="#about-me" className="close">Sobre mí</a>
        <a href="#portfolio" className="close">Portafolio</a>
        <a href="#contact" className="close">Contacto</a>
      </div>
      <Header />
      <main>
        <Prof />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
