import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Cover from './components/Cover';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/*<Navigation />*/}
      <Cover />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
