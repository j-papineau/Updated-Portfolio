import ExperienceCard from "./ExperienceCard"

const adrDesc = "As a marketing support team member at ADR, I work closely with my lead in all aspects of ADR's online customer facing space. This includes developing tools on our front-end and back-end website using JavaScript, HTML, and the WordPress Platform, as well as creating pages, and managing the many Google Ads Campaigns used to generate meaningful customer connections. A large part of my role at ADR involves optimizing our content towards our SEO strategy, generating leads organically and improving our google search engine results ranking. Lastly, (through guidance of my lead) reading data and analyzing the changes over time to our campaigns, particularly in reference to our Click-through-rates and Click to lead ratio's, to optimize bidding strategies to get the best results per dollar spent in our ad campaigns."
const targetDesc = "Responsible for the receiving processes of the store location. Including taking in replenishment trucks, and handling vendors in an efficient manner."

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
            desc={targetDesc}
            imgURL="/img/targetlogo-6.jpeg"/>
        </div>
        
    </div>
  )
}

export default Experence

