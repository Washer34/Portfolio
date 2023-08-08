import React from 'react'

const ProjectItem = ({ img, title, tech }) => {
  return (
    <div className='project-item'>
      <img src={img} alt="/" className='project-img' />
      <div className='project-details'>
        <h3 className='project-title'>
          {title}
        </h3>
        <p className='project-tech'>{tech}</p>
        <a href="/">
          <p className='project-more-info'>More Info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem