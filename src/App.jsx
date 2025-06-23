import AboutMe from "./Component/Home-page/AboutMe";
import Contact from "./Component/Home-page/Contact";
import Hero from "./Component/Home-page/Hero";
import Itberries from "./Component/Home-page/Itberries";
import Portfolio from "./Component/Home-page/Portfolio";
import Skills from "./Component/Home-page/Skills";
import Footer from "./Component/Shared-folder/Footer";
import Header from "./Component/Shared-folder/Header";

function App() {
  return (
    <>
      <div>
        <div className="md:absolute transition-transform left-0 right-0 z-10 ">
          <Header />
        </div>
        <div className="md:relative">
          <Hero />
        </div>
      </div>
      <Itberries />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
