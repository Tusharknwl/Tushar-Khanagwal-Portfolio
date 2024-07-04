import { BrowserRouter } from "react-router-dom";
import React from "react";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Technologies,
  Works,
  Experience,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#121212]">
        <span className="absolute w-[300px] h-[300px] top-[-200px] sm:left-[40%] left-[20%] rounded-full place-self-center bg-[#ff9064] opacity-90 z-0 blur-[150px]"></span>
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Technologies />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
