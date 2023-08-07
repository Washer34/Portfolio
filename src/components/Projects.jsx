import React from 'react'
import ProjectItem from './ProjectItem'
import CaravanImg from '../images/img0.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iure! Corrupti, qui quaerat harum sit earum beatae iure, rerum laborum omnis veritatis necessitatibus doloribus eaque rem error ea repellat officia!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={CaravanImg} title={'Caravan'} />
        <ProjectItem img={CaravanImg} title={'Kiddens'} />
      </div>
    </div>

  )
}

export default Projects