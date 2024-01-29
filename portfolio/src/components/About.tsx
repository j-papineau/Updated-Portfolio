
import { Image } from '@chakra-ui/react'



const About = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300 mb-10">About Me</p>
        <Image className='rounded-md shadow-white shadow' src="/img/pers-img.jpg" height={400}/>
        <p className='mt-4  md:w-[50%] text-center px-6'>Hi! My name is Joel Papineau I am a senior at the University of North Florida persuing a
        degree in Computer Science. My main areas of interest are Computer Vision, Web development, Graphics Technology, Embedded Systems, and Application Development. I love 
        to workout, explore outside (like rock climbing!), and tinker with electronics.</p>

    </div>
  )
}

export default About