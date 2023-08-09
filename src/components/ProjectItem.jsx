import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const ProjectItem = ({ img, title, tech, zIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div>
      <div className='project-item'>
        <img src={img} alt="/" className='project-img' />
        <div className='project-details'>
          <h3 className='project-title'>
            {title}
          </h3>
          <p className='project-tech'>{tech}</p>
          <a onClick={openModal}>
            <p className='project-more-info'>More Info</p>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" style={{ zIndex: zIndex }}>
          <div className="modal-overlay" onClick={handleOverlayClick}></div>
          <ProjectModal title={title} />
        </div>
      )}
    </div>
  )
}

export default ProjectItem