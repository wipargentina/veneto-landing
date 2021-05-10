import React from 'react';
import BtnScroll from './BtnScroll';

export default function Cta1() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta-content'>
          <h3>Oportunidad única por Pre Lanzamiento</h3>
          <BtnScroll textBtn='Consultá Ahora' classBtn='btn-cta' />
        </div>
      </div>
    </section>
  );
}
