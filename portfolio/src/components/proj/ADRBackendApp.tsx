import { Image } from '@chakra-ui/react'


const ADRBackendApp = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl tracking-wider my-2'>ADR Web Backend App</p>
        <p className='italic text-slate-400 w-[65%] text-center'>This project is used for a variety of functions, and serves as a home residence
        for the many tools I've developed to improve and automate my workflow. This app is fully auth controlled, including view levels for user roles.
        Tools included in this project include:</p>
        <ul className=' mt-2 w-[50%] space-y-2 flex flex-col justify-center items-center text-slate-300'>
            <li>- Full tracking for the zip search function on the WP site, leveraging supabase to track user behaviour like clicks on the modal window.</li>
            <li>- The Google Maps integration to control the polygons used to link service areas with landing pages on the WP site.</li>
            <li>- Reports Hub, leverages the existing Region Ad data from Microsoft Fabric to produce detailed reports of territories, including
        a "score" which is a formula I developed myself to condense a complex set of metrics down into a easy to read 0-100 score.</li>
            <li>- PowerPoint Creator: a serverside python app that produces powerpoint presentations based on date ranges and territories selected
                to be presented in meetings
            </li>
            <li>- All data used in this app is stored and interfaced through a conjuction of Firebase and Supabase Cloud DB's</li>
        </ul>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/appDual.png'/>
            <Image className='hover:scale-150 transition-transform duration-500' maxHeight={600} src='/projImg/app3screen.png'/>
        </div>
        
        
        
        
        
        
    </div>
  )
}

export default ADRBackendApp