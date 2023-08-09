import React from 'react'
import ProjectItem from './ProjectItem'
import CaravanImg from '../images/caravan/caravan0.png'
import KiddensImg from '../images/kiddens/kiddens0.png'

const Projects = () => {
  const kiddensDescription = '';
  const caravanDescription = '';
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>Projects</h1>
      <p className='text-center py-8'>Throughout my training at The Hacking Project, I have been able to create various projects, more or less elaborate. This section will also showcase the future projects I will be involved in during my web developer career.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={CaravanImg} title={'Caravan'} tech={'Ruby'} zIndex={1} description={caravanDescription} />
        <ProjectItem img={KiddensImg} title={'Kiddens'} tech={'Ruby'} zIndex={2} description={kiddensDescription} />
      </div>
    </div>
  )
}

export default Projects