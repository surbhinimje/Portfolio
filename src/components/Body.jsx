import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
//import Resume from "./Resume";
import Contact from "./Contact";

function Body(){
    return <div>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="#about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter> */}
        
    <Home/>
    <About />
    <Work/>
    <Projects/>
    <Contact/>
    </div>
}
export default Body;