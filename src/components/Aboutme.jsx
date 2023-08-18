import React, { useEffect } from 'react'
import AboutMeImg from '../images/me.jpg'
import { useTranslation } from 'react-i18next'

const Aboutme = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id='aboutme' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>{t('aboutMeTitle')}</h1>
      <p className='custom-text' data-aos="fade-right">{t('aboutMeIntro')}</p>
      <p className='custom-text' data-aos="fade-left">{t('aboutMeSkills')}</p>
      <div className='flex justify-center items-center' data-aos="fade-in">
        <div className="about-img">
          <img src={AboutMeImg} alt="" className='rounded-xl image-with-filter' />
        </div>
      </div>
      <p className='custom-text' data-aos="fade-down">{t('aboutMeIntro2')}</p>
      <p className='custom-text' data-aos="fade-up">{t('aboutMeIntro3')}</p>
    </div>

  )
}

export default Aboutme