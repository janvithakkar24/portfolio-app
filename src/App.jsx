import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testinomials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testinomials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
