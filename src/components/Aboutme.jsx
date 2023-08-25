import React, { useState } from 'react'
import AboutMeImg from '../images/me.jpg'
import { useTranslation } from 'react-i18next'
import { FaPrint } from 'react-icons/fa'

const Aboutme = () => {
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <section id='aboutme' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>{t('aboutMeTitle')}</h1>
      <article>
        <p className='custom-text' data-aos="fade-right">{t('aboutMeIntro')}</p>
        <p className='custom-text' data-aos="fade-left">{t('aboutMeSkills')}</p>
      </article>
      <article className='flex justify-center items-center' data-aos="fade-in">
        <div className="about-img">
          <img src={AboutMeImg} alt="Antoine Paturel - Développeur Web Fullstack" className='rounded-xl image-with-filter' width="100%" height="auto" />
        </div>
      </article>
      <p className='custom-text' data-aos="fade-down">{t('aboutMeIntro2')}</p>
      <p className='custom-text' data-aos="fade-up">{t('aboutMeIntro3')}</p>
      <article className='CV-center' data-aos="fade-up">
        <p className={`CV-text-${hovered ? 'visible' : 'hidden'}`}>
          {t('downloadCv')}
        </p>
        <a
          className='CV-button'
          href="https://drive.google.com/uc?export=download&id=1D5dgyUmQAA-F-8TBJhsA_4wkndGeL_jI"
          download="CV_Developpeur_Web_Fullstack_Antoine_Paturel.pdf"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className='CV-icon'>
            <FaPrint />
          </span>
        </a>
      </article>
    </section>

  )
}

export default Aboutme