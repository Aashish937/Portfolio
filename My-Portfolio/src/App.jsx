import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlobEffect from './BlobEffect';


const App = () => {
  return (
    <>
      <div className="bg-[#050414]">

      <BlobEffect position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="pt-20">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
    </>
  );
}

export default App;