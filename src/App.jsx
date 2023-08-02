import "./App.css";
import Header from "./components/Header";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
