import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from 'react-markdown'

const ProjectModal = (props) => {
  const { project } = props
  const { attributes } = project;

  const generateCarouselItems = () => {
    return attributes.screens.data.map((screen, index) => (
      <div key={index}>
        <img className='carousel-img' src={screen.attributes.url} alt={`Image ${index + 1}`} />
      </div>
    ));
  };

  return (
    <div className="modal-content">
      <br />
      <Carousel width={'80%'} infiniteLoop={true}>
        {generateCarouselItems()}
      </Carousel>
      <h1 className='custom-title'>{attributes.title}</h1>
      <ReactMarkdown>{attributes.description}</ReactMarkdown>
    </div>
  );
};

export default ProjectModal;