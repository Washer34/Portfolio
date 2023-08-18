import React, { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
import CaravanImg from '../images/caravan/caravan0.png'
import KiddensImg from '../images/kiddens/kiddens0.png'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const [projectList, setProjectList] = useState([])
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/projects/?populate=Screens');
        const data = await response.json();
        setProjectList(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des données: ', error);
      }
    };
    fetchData()
  }, [])

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>{t('projectTitle')}</h1>
      <p className='custom-text' data-aos="flip-up" data-aos-offset="400">{t('projectIntro')}</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectList.map((project, index) => {
          return (
            <>
              <ProjectItem tech={'Ruby'} zIndex={index} {...project} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Projects