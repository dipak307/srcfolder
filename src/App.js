import React from 'react';
import Nav from "./Portfolio/Nav/Nav";
import './App.css';
import Home from './Portfolio/Home/Home';
import About from './Portfolio/About/About';
import Services from './Portfolio/Services/Services';
import Projects from './Portfolio/Projects/Projects';
import Contact from './Portfolio/Contact/Contact';
import Footer from './Portfolio/Footer/Footer';
import Skills from './Portfolio/skill/Skills';

const App=()=> {
  return (
    <div className="App">
     <Nav/>
     <Home />
     <About/>
     {/* <Services/> */}
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;



