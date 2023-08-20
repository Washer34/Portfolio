import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from 'react-markdown'

const ProjectModal = (props) => {
  const { project } = props
  const { attributes } = project;
  const imgUrl = (nb) => {
    return (
      attributes.screens.data[nb].attributes.url || ''
    )
  }
  //const htmlDescription = marked(attributes.description);

  return (
    <div className="modal-content">
      <br />
      <Carousel width={'80%'} infiniteLoop={true}>
        <div>
          <img className='carousel-img' src={`${imgUrl(0)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`${imgUrl(1)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`${imgUrl(2)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`${imgUrl(3)}`} />
        </div>
      </Carousel>
      <h1 className='custom-title'>{attributes.title}</h1>
      <ReactMarkdown>{attributes.description}</ReactMarkdown>
    </div>
  );
};

export default ProjectModal