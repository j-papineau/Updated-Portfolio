import LangItem from "./LangItem"

const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300 mb-10">Software Technologies & Skills</p>
        <div className="flex flex-col xl:columns-3 items-center justify-center space-y-4">
            <p className="text-2xl tracking-wider font-bold text-slate-400 mb-10">Programming Languages</p> 
            <LangItem imgSrc="/langImg/python.png" langName={"Python"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/java.png" langName={"Java"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/js2.png" langName={"JavaScript"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/typescript.png" langName={"TypeScript"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/cpp.png" langName={"C++"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/php.png" langName={"PHP"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/csharp.png" langName={"C#"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/c.png" langName={"C"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/rust.png" langName={"Rust"} experienceLevel="Beginner"/>
        </div>
        <div className="flex flex-col xl:columns-3 items-center justify-center space-y-4 mt-10">
            <p className="text-2xl tracking-wider font-bold text-slate-400 mb-10">Libraries / Frameworks</p> 
            <LangItem imgSrc="/langImg/next.png" langName={"Next.js"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/react.png" langName={"React"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/esp.png" langName={"Espressif32"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/arduino-logo.png" langName={"Arduino"} experienceLevel="Intermediate"/>
            <LangItem imgSrc="/langImg/wpf2.png" langName={"WPF"} experienceLevel="Average"/>
            <LangItem imgSrc="/langImg/net.png" langName={".NET | ASP, AvaloniaUI"} experienceLevel="Average"/>
            <LangItem imgSrc="/langImg/javafx.png" langName={"JavaFX"} experienceLevel="Average"/>
            <LangItem imgSrc="/langImg/opencv.png" langName={"OpenCV | Python"} experienceLevel="Average"/>
            <LangItem imgSrc="/langImg/tf.png" langName={"TensorFlow | Python"} experienceLevel="Beginner"/>
        </div>
        <div className="flex flex-col xl:columns-3 items-center justify-center space-y-4 mt-10">
            <p className="text-2xl tracking-wider font-bold text-slate-400 mb-10">Data Flow Platforms</p> 
            <LangItem imgSrc="/langImg/innoDB.png" langName={"InnoDB"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/supabase.png" langName={"Supabase"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/firebase.png" langName={"Firebase | Firestore, Auth"} experienceLevel="Average"/>
        </div>
        <div className="flex flex-col xl:columns-3 items-center justify-center space-y-4 mt-10">
            <p className="text-2xl tracking-wider font-bold text-slate-400 mb-10">CMS | Builder</p> 
            <LangItem imgSrc="/langImg/wordpress.png" langName={"WordPress"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/oxygen.png" langName={"Oxygen Builder"} experienceLevel="Proficient"/>
            <LangItem imgSrc="/langImg/woo.png" langName={"Woo Commerce"} experienceLevel="Average"/>
        </div>
    </div>
  )
}

export default Technologies