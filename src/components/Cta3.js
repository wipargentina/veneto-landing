import React from 'react';
import BtnScroll from './BtnScroll';

export default function Cta3() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta-content'>
          <div className='cta-text'>
            <h3>Tu inversión inmobiliaria, con mayor rentabilidad</h3>
          </div>
          <BtnScroll textBtn='Consultá Ahora' classBtn='btn-cta' />
        </div>
      </div>
    </section>
  );
}
