import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";


function App() {
  return (
    <div className="site-wrapper">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>

    </div>
  );
}

export default App;