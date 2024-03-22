import Header from './Header';
import Prof from './Prof';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import "../../index.css";

function App() {

  return (
    <>
      <div className="col-menu">
        <a href="#" className="close">Home</a>
        <a href="#about-me" className="close">About me</a>
        <a href="#portfolio" className="close">Portfolio</a>
        <a href="#contact" className="close">Contact</a>
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