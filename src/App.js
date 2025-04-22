import React, { useState } from 'react';
import  Nav  from './Components/Nav'
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import MoreDetails from "./Components/MoreDetails";
import Footer from './Components/Footer';





function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <Nav />
      {currentPage === "home" && (
        <>
          <Home goToMoreDetails={() => setCurrentPage("details")} />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}

      {currentPage === "details" && (
        <>
          <MoreDetails goBack={() => setCurrentPage("home")} />
        </>
      )}
    </div>
  );
}

export default App;