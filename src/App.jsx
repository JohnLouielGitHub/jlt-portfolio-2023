import "./App.css";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
