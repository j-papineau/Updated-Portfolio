import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Technologies from "./components/Technologies"

function App() {


  return (
    <>
      
      <main className="bg-slate-950 text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scroll-smooth font-montserrat font-bold">
        <nav>
          <NavBar/>
        </nav>
        <section id="hero">
          <Hero/>
          <Technologies/>
        </section>
      </main>
      
      
    </>
    
  )
}

export default App
