import React from 'react';
import BtnScroll from './BtnScroll';

export default function Cta1() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta-content'>
          <div className='cta-text'>
            <h4>
              <span>Veneto VIII</span> Oportunidad única
            </h4>
            <h3>Grandes descuentos pago de contado</h3>
          </div>
          <BtnScroll textBtn='Consultá Ahora' classBtn='btn-cta' />
        </div>
      </div>
    </section>
  );
}
