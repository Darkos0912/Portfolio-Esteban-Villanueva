import Header from './HeaderE';
import Prof from './ProfE';
import AboutMe from './AboutME';
import Portfolio from './PortfolioE';
import Contact from './ContactE';
import Footer from './FooterE';
import "../index.css";

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