import React from 'react'
import ADRSite from './proj/ADRSite'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-3xl lg:text-4xl tracking-wider font-bold text-slate-300 mb-10">My Work</p>
        <ADRSite/>
    </div>
  )
}

export default Projects