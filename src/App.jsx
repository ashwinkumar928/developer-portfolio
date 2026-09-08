import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

function App() {
  return (
    <div className="site-wrapper">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;