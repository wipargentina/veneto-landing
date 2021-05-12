import React from 'react';
import HeroImage from '../assets/static/hero-bg.webp';

export default function VenetoVillage() {
  return (
    <section className='products'>
      <div className='products-hero'>
        <img
          src={HeroImage}
          alt='veneto 8'
          className='hero-bg'
          loading='lazy'
        />
        <div className='hero-overlay'></div>
        <div className='hero-caption'>
          <div className='container'>
            <div>
              <h1>Veneto Village</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2>Un paraíso único a 10’ de Villa Carlos Paz</h2>

        <p className='lead'>
          Sobre la costa Lago San Roque, Ruta Nacional N º 38 km 41, Villa
          Parque Siquiman. Vistas privilegiadas y rodeados de naturaleza. <br />
          Departamentos de 1 y 2 habitaciones y departamentos VIP. Área
          deportiva, bajada al lago y guardería náutica.
        </p>
      </div>
      <div className='container'>
        <div className='products-inverstment'>
          <div className='row justify-content-center'>
            <div className='col-md-3'>1</div>
            <div className='col-md-3'>2</div>
            <div className='col-md-3'>3</div>
          </div>
        </div>
        <div className='products-amenities'>amenities</div>
        <div className='products-gallery'>imagenes</div>
        <div className='products-value'>propuesta de valor o comercial</div>
      </div>
    </section>
  );
}
