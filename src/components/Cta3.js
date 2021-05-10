import React from 'react';
import BtnScroll from './BtnScroll';

export default function Cta3() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta-content'>
          <h3>Solicitá el catálogo completo de departamentos</h3>
          <BtnScroll textBtn='Consultá Ahora' classBtn='btn-cta' />
        </div>
      </div>
    </section>
  );
}
