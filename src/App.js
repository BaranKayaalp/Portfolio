import React from 'react';
import  Nav  from './Components/Nav'
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
