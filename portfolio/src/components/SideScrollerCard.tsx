import { Image } from "@chakra-ui/react"

type Props = {school:string, imgUrl:string, degree:string, year:string}

const SideScrollerCard = (props: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-800 p-10">
        <p className="text-xl">{props.school}</p>
        <Image src={props.imgUrl} height={40} className="rounded-md p-2 bg-slate-400" />
        <p>{props.degree}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default SideScrollerCard