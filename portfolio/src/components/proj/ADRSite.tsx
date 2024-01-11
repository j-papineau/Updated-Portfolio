import { Image } from '@chakra-ui/react'

type Props = {}

const ADRSite = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl tracking-wider italic'>ADR Website</p>
        <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/adrLaptop.png'/>
        <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/adrPhone.png'/>
        
    </div>
  )
}

export default ADRSite