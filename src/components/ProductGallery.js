import React from 'react';
/* eslint-disable */
import { Carousel } from 'bootstrap';

export default function ProductGallery({ gallery = [], title = 'default' }) {
  const data = gallery;
  return (
    <div
      id={`carouselControls${title}`}
      className='carousel slide carousel-fade products-gallery'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        {data.map((item) => (
          <div
            key={item.id}
            className={item.id === 1 ? 'carousel-item active' : 'carousel-item'}
          >
            <img src={item.imageUrl} className='' alt='...' loading='lazy' />
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target={`#carouselControls${title}`}
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target={`#carouselControls${title}`}
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
