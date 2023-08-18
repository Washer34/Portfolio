import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const ProjectItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { description, attributes, data, zIndex } = props;
  const imgUrl = attributes.Screens.data[0].attributes.url || '';
  const tech = 'ruby'
  console.log('Zindex= ', zIndex)

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
        <img src={`http://localhost:1337${imgUrl}`} alt="/" className='project-img' />
        <div className='project-details'>
          <h3 className='project-title'>
            {attributes.Title}
          </h3>
          <p className='project-tech'>{tech}</p>
          <a onClick={openModal}>
            <p className='project-more-info'>More Info</p>
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