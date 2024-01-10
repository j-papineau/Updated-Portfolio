import { Image } from "@chakra-ui/react"
type Props = {langName:string, experienceLevel:string, imgSrc:string}

const LangItem = (props: Props) => {
  return (
    <div className='flex items-center justify-between w-screen md:w-[50vw] px-10'>
        <Image maxHeight={50} className="rounded-full" src={props.imgSrc} alt="joel-papineau-headshot"/>
        <p className="text-slate-300">{props.langName}</p>
        <p className="text-slate-500">Experience Level: {props.experienceLevel}</p>
    </div>
  )
}

export default LangItem