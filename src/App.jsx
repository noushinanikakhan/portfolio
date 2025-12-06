import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./Sections/About"; // ⬅ add this
import Skills from "./Sections/Skills"; // ⬅ add
import Education from "./Sections/Education"; // ⬅ add this
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
         <Skills />
                 <Education />  {/* ⬅ new section */}
                 <Projects></Projects>
                 <Contact></Contact>

        {/* About, Skills, Education, Experience, Projects, Contact will go here */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
