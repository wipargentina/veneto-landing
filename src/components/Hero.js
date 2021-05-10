import React from 'react';
import BtnScroll from './BtnScroll';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>texto</div>
          <div className='col-md-6'>foto</div>
        </div>
        <BtnScroll textBtn='Consultanos' classBtn='btn-primary' />
      </div>
    </section>
  );
}
