import { Button, Image} from "@chakra-ui/react"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-10">
        <div className="border-2 border-slate-400 rounded-full drop-shadow-xl">
            <Image maxHeight={200} className="rounded-full" src="/public/img/headshot2.jpg" alt="joel-papineau-headshot"/>
        </div>
        <h1 className="tracking-widest text-2xl text-slate-300">Joel Papineau</h1>
        <p className="tracking-widest text-slate-400">Software Engineer | Full Stack Developer</p>
        <div className="flex flex-row space-x-4">
            <Button colorScheme="gray" >View Resume</Button>
        </div>
    </div>
  )
}

export default Hero