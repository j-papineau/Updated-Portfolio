import { Image } from "@chakra-ui/react"
type Props = {langName:string, experienceLevel:string, imgSrc:string}

const LangItem = (props: Props) => {
  return (
    <div className='grid grid-cols-3 gap-2 w-full'>
      <div className="flex items-center justify-center">
        <Image maxHeight={50} className="rounded-full" src={props.imgSrc} alt="joel-papineau-headshot"/>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-slate-300 text-center">{props.langName}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-slate-500">Experience Level: {props.experienceLevel}</p>
      </div>
        
    </div>
  )
}

export default LangItem