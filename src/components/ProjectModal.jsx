import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from 'react-markdown'

const ProjectModal = (props) => {
  const { project } = props
  const { imgUrl } = project;

  const generateCarouselItems = () => {
    return imgUrl.map((url, index) => (
      <div key={index}>
        <img className='carousel-img' src={url} alt={`Image ${index + 1}`}
          width="100%"
          height="auto" />
      </div>
    ));
  };

  return (
    <div className="modal-content">
      <br />
      <Carousel width={'80%'} infiniteLoop={true}>
        {generateCarouselItems()}
      </Carousel>
      <h1 className='custom-title'>{project.title}</h1>
      <ReactMarkdown>{project.description}</ReactMarkdown>
    </div>
  );
};

export default ProjectModal;