import React, { useContext, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id='main'>
      <img className='main-img' src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <div className='main-overlay'>
        <div className='main-content'>
          <h1 className='main-title'>{t('mainTitle')}</h1>
          <h2 className='main-subtitle'>
            {t('mainSubtitlePrefix')}&nbsp;
            <TypeAnimation
              sequence={[
                'Développeur Web',
                1000,
                'Fullstack',
                1000,
                'Passionné de technologie',
                1000,
                'Constructif',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddinLeft: '5px', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://www.linkedin.com/in/antoine-ptrl/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='main-icon' size={25} /></a>
            <a href="https://github.com/Washer34" target='_blank' rel="noopener noreferrer"><FaGithub className='main-icon' size={25} /></a>
            <a href="mailto:antoine.paturel34@free.fr" target='_blank' rel="noopener noreferrer"><FaEnvelope className='main-icon' size={25} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main