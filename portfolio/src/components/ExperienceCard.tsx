import { Image } from "@chakra-ui/react"

type Props = {jobName:string, imgURL:string, desc:string, techUsed:boolean, techUrls?:string[], years:string}

const ExperienceCard = (props: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-800 p-10">
        <p className="text-2xl">{props.jobName}</p>
        <Image className="object-cover" src={props.imgURL} height={100}/>
        <p className="text-slate-400">{props.years}</p>
        {!props.techUsed ? (<></>) : (
        <>
        <p>Technologies Utilized</p>
        <div className="flex flex-row space-x-4">
            {props.techUrls?.map((value) => {
                return <Image className="rounded-full object-cover" src={value} width={10} height={10}/>
            })}
        </div>
        </>
        )}
        <p className="text-sm">{props.desc}</p>
    </div>
  )
}

export default ExperienceCard