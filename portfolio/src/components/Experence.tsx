import ExperienceCard from "./ExperienceCard"

const adrDesc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non mollitia impedit fugit corporis deserunt, enim doloribus \
    dignissimos magni tempore autem, exercitationem consequatur similique cupiditate? Laborum error itaque minima atque eum! \
    sit amet consectetur adipisicing elit. Non mollitia impedit fugit corporis deserunt, enim doloribus dignissimos magni tempore autem, \
    exercitationem consequatur similique cupiditate? Laborum error itaque minima atque eum!"

const Experence = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300">Work Experience</p>
        <div className="w-[100%] h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <ExperienceCard 
            jobName="Affordable Dumpster Rental, LLC."
            years="April 2023 - Current"
            techUsed={true}
            techUrls={["/langImg/js2.png", "/langImg/next.png", "/langImg/oxygen.png", "langImg/php.png", "langImg/wordpress.png", "langImg/woo.png"]}
            desc={adrDesc}
            imgURL="/img/adr.png"/>

            <ExperienceCard 
            jobName="Target"
            years="April 2023 - Current"
            techUsed={false}
            desc={adrDesc}
            imgURL="/img/targetlogo-6.jpeg"/>
        </div>
        
    </div>
  )
}

export default Experence

