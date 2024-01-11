import { Button, Image} from "@chakra-ui/react"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-10">
        <div className="border-2 border-slate-400 rounded-full drop-shadow-xl">
            <Image maxHeight={200} className="rounded-full" src="/img/headshot2.jpg" alt="joel-papineau-headshot"/>
        </div>
        <h1 className="tracking-wider text-3xl text-slate-300 font-bold">Joel Papineau</h1>
        <p className="tracking-widest text-slate-400">UNF Osprey | Full Stack Developer</p>
        
        <div className="flex flex-row space-x-4 items-center justify-center align-middle text-slate-300 mt-2 text-xl">
          <a className="hover:text-slate-500 hover:underline" href="#education">Education</a>
          <a className="hover:text-slate-500 hover:underline" href="#skills">Skills</a>
          <a className="hover:text-slate-500 hover:underline" href="#experience">Experience</a>
          <a className="hover:text-slate-500 hover:underline" href="#projects">Projects</a>
        </div>
        <div className="flex flex-row space-x-4 mt-4">
          <a className="text-slate-200 hover:text-slate-500 text-xl" href="/joelResume.pdf" target="_blank">
            View Resume
          </a>
        </div>
    </div>
  )
}

export default Hero