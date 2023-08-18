import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectModal = (props) => {
  const { project } = props
  const { attributes } = project;
  const imgUrl = (nb) => {
    return (
      attributes.Screens.data[nb].attributes.url || ''
    )
  }

  return (
    <div className="modal-content">
      <br />
      <Carousel width={'80%'} infiniteLoop={true}>
        <div>
          <img className='carousel-img' src={`http://localhost:1337${imgUrl(0)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`http://localhost:1337${imgUrl(1)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`http://localhost:1337${imgUrl(2)}`} />
        </div>
        <div>
          <img className='carousel-img' src={`http://localhost:1337${imgUrl(3)}`} />
        </div>
      </Carousel>
      <h1 className='custom-title'>{attributes.Title}</h1>

      <p className='custom-text'>{attributes.Description}</p>
    </div>
  );
};

export default ProjectModal