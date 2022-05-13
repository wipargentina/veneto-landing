import React from 'react';
import BtnScroll from './BtnScroll';
import HeroImage from '../assets/static/hero-veneto-x.jpg';

export default function Hero() {
  return (
    <section className='hero'>
      <img src={HeroImage} alt='' className='hero-bg' />
      <div className='hero-content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <p className='hero-antetitle'>Villa Carlos Paz</p>
              <h1 className='hero-title'>
                Tu departamento en las sierras de Córdoba
              </h1>
              <h3 className='hero-subtitle'>
                ¡El momento de invertir es ahora!
              </h3>
              {/* <ul>
                <li>Entrega Mínima</li>
                <li>
                  <span>Plan Cosecha:</span> 10 pagos semestrales, 10% de
                  entrega
                </li>
                <li>
                  Finaciación hasta en <span>60 cuotas</span>
                </li>
              </ul> */}
              <div>
                <BtnScroll textBtn='Consultanos' classBtn='btn-cta' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
