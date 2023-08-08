import React from 'react'
import AboutMeImg from '../images/me.jpg'

const Aboutme = () => {
  return (
    <div id='aboutme' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='custom-title'>About me</h1>
      <p className='text-justify py-8'>My name is Antoine, I'm 29 years old, and I am a passionate Fullstack web developer. After completing an 8-month training at "The Hacking Project," I fell in love with the world of web development. Diligent, friendly, curious, and eager to learn, I am always seeking new challenges to tackle.</p>
      <p className='text-justify py-8'>Through my journey, I have developed strong skills in Ruby, Rails, JavaScript, ReactJS, CSS, and HTML. Furthermore, I am proficient with SQL and PostgreSQL databases. I have also gained a deep understanding of the application development process, from initial development to staging and deployment.</p>
      <div className='flex justify-center items-center'>
        <div className="about-img">
          <img src={AboutMeImg} alt="" className='rounded-xl image-with-filter' />
        </div>
      </div>
      <p className='text-justify py-8'>I love creating web applications that provide exceptional user experiences and perfectly meet my clients' needs. Currently, I am seeking a 2-month internship, from 02/10/2023 to 24/11/2023, which could potentially lead to a full-time job opportunity.</p>
      <p className='text-justify py-8'>I firmly believe that continuous learning is crucial in this ever-evolving field, which is why I am always open to new collaborations and exciting projects. Feel free to contact me to discuss your ideas and projects; I would be delighted to contribute to their realization.</p>
    </div>

  )
}

export default Aboutme