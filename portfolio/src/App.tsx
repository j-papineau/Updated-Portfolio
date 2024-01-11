import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Technologies from "./components/Technologies"
import Education from "./components/Education"
import Experence from "./components/Experence"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {


  return (
    <>
      
      <main className="bg-slate-950 text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scroll-smooth font-montserrat font-bold">
        <nav>
          <NavBar/>
        </nav>
        <section id="hero">
          <Hero/>
        </section>
        <section>
          <About/>
        </section>
        <section id="experience">
          <Experence/>
        </section>
        <section id="skills">
          <Technologies/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="education">
          <Education/>
        </section>
      </main>
      
      
    </>
    
  )
}

export default App
