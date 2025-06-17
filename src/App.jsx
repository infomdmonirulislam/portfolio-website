import AboutMe from "./Component/Home-page/AboutMe";
import Contact from "./Component/Home-page/Contact";
import Hero from "./Component/Home-page/Hero";
import Itberries from "./Component/Home-page/Itberries";
import Portfolio from "./Component/Home-page/Portfolio";
import Skills from "./Component/Home-page/Skills";
import StikyNavbar from "./Component/Home-page/StikyNavbar";
import Footer from "./Component/Shared-folder/Footer";

function App() {
  return (
    <>
      <StikyNavbar />
      <Hero />
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
