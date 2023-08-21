import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const ProjectItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { description, attributes, data, zIndex } = props;
  const imgUrl = attributes.screens.data[0].attributes.url || '';

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
        <img src={`${imgUrl}`} alt="/" className='project-img' width="100%" height="auto" />
        <div className='project-details'>
          <h3 className='project-title'>
            {attributes.title}
          </h3>
          <p className='project-tech'>{attributes.tech}</p>
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
    </div>
  )
}

export default ProjectItem