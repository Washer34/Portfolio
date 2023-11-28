import React, { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
import { useTranslation } from 'react-i18next'
import projectsData from '../database/projects'

const Projects = () => {
  const [projectList, setProjectList] = useState([])
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setProjectList(projectsData);
  }, [])

  return (
    <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>{t('projectTitle')}</h1>
      <p className='custom-text' data-aos="flip-up" data-aos-offset="400">{t('projectIntro')}</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectList.map((project, index) => {
          return (
            <article key={index}>
              < ProjectItem zIndex={index} {...project} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects