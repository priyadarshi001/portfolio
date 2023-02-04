import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-darkBlue">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
