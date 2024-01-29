import ADRSite from './proj/ADRSite'
import ADRBackendApp from './proj/ADRBackendApp'



const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300 mb-10">My Work</p>
        <ADRSite/>
        <ADRBackendApp/>
        <p className='text-center'>Lots more to come here as I am currently working on documenting my other projects, I sure keep myself busy!</p>
    </div>
  )
}

export default Projects