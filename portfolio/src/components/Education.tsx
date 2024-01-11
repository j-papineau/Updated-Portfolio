import SideScrollerCard from "./SideScrollerCard"

const Education = () => {
    
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300">Education</p>
        
        <div className="w-[100%] h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <SideScrollerCard imgUrl="img/unf.png" school="University of North Florida" 
            degree="Computer Science, B.S"
            year="2022 - Current (Graduation Dec 2024)"/>
            <SideScrollerCard imgUrl="img/dsc.png" school="Daytona State College" 
            degree="Associate of Science"
            year="2020 - 2022"/>
        </div>
    </div>
  )
}

export default Education