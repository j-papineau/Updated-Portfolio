import { Image } from '@chakra-ui/react'

type Props = {}

const ADRSite = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl tracking-wider my-2'>ADR Website</p>
        <p className='italic text-slate-400 w-[65%] text-center'>Website Redesign for the company. Brought a dated WP theme up into a clean, concise, responsive page. In addition to the revamp,
        I implemented more customer facing functions, including a zip-search function that is fully controllable and analyzable through the next project I will touch on.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/adrLaptop.png'/>
          <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/adrPhone.png'/>
        </div> 
    </div>
  )
}

export default ADRSite