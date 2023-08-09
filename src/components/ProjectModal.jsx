import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectModal = ({ title }) => {
  const lowerTitle = title.toLowerCase();

  return (
    <div className="modal-content">
      <br />
      <Carousel width={'80%'} infiniteLoop={true}>
        <div>
          <img className='carousel-img' src={`src/images/${lowerTitle}/${lowerTitle}0.png`} />
        </div>
        <div>
          <img className='carousel-img' src={`src/images/${lowerTitle}/${lowerTitle}1.png`} />
        </div>
        <div>
          <img className='carousel-img' src={`src/images/${lowerTitle}/${lowerTitle}2.png`} />
        </div>
        <div>
          <img className='carousel-img' src={`src/images/${lowerTitle}/${lowerTitle}3.png`} />
        </div>
      </Carousel>
      <h1 className='custom-title'>{title}</h1>
    </div>
  );
};

export default ProjectModal