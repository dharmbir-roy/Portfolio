import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import BG_GRADIENT from "./assets/wave.jpg";

function App() {
  return (
    <div className='bg-background'>
      {/* <div 
       style={{
        backgroundImage: `url(${BG_GRADIENT})`
       }}
      > */}
        <Navbar />
        <Hero />
      {/* </div> */}
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App