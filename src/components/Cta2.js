import React from 'react';
import BtnScroll from './BtnScroll';

export default function Cta2() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta-content'>
          <h3>Construcción Premium. Últimas unidades disponibles</h3>
          <BtnScroll textBtn='Consultá Ahora' classBtn='btn-cta' />
        </div>
      </div>
    </section>
  );
}
