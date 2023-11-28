import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const ProjectItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { title, tech, imgUrl, zIndex } = props;

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
    <article>
      <div className='project-item'>
        <img src={`${imgUrl[0]}`} alt="/" className='project-img' width="100%" height="auto" />
        <div className='project-details'>
          <h3 className='project-title'>
            {title}
          </h3>
          <p className='project-tech'>{tech}</p>
          <a onClick={openModal}>
            <p className='project-more-info'>Plus d'Infos</p>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" style={{ zIndex: zIndex + 1 }} >
          <div className="modal-overlay" onClick={handleOverlayClick}></div>
          <ProjectModal project={props} />
        </div>
      )}
    </article>
  )
}

export default ProjectItem