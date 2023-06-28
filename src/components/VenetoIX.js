import React from 'react'
import { FiDollarSign, FiClock, FiStar } from 'react-icons/fi'
import ProductsAmenities from './VenetoVIII/ProductsAmenties'
import ProductGallery from './ProductGallery'

import data from '../api/veneto-9.json'

export default function VenetoIX() {
  return (
    <section className='products'>
      <div className='products-hero'>
        <img
          src='https://constructoradelvalle.com/veneto-9/hero.jpg'
          alt='veneto 8'
          className='hero-bg'
          loading='lazy'
        />
        <div className='hero-overlay'></div>
        <div className='hero-caption'>
          <div className='container'>
            <div>
              <h1>Veneto IX</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2>La oportunidad que estabas esperando</h2>

        <p className='lead'>
          Se encuentra en una de las esquinas más emblemáticas de la ciudad,{' '}
          <b>frente al casino</b>. Permitiendo estar cerca de todo, la
          costanera, los teatros, la peatonal y sus mejores propuestas
          gastronómicas. Todo lo bello de Villa Carlos Paz en un radio de 200
          metros.
        </p>
        <div className='products-grid'>
          <div className='grid-item item-1'>
            <img
              src='https://constructoradelvalle.com/veneto-9/amenties-gallery-1.jpeg'
              alt='imagen'
              loading='lazy'
            />
          </div>
          <div className='grid-item item-2'>
            <img
              src='https://constructoradelvalle.com/veneto-9/amenties-gallery-2.jpeg'
              alt='imagen'
              loading='lazy'
            />
          </div>
          <div className='grid-item item-3'>
            <img
              src='https://constructoradelvalle.com/veneto-9/amenties-gallery-3.jpeg'
              alt='imagen'
              loading='lazy'
            />
          </div>
        </div>
      </div>

      <div className='products-investment'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-3'>
              <div className='card'>
                <FiDollarSign className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>desarrollo</div>
                  <div className='card-title'>en Pozo</div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <FiClock className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>duración</div>
                  <div className='card-title'>36 meses</div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <FiStar className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>inversión</div>
                  <div className='card-title'>estrella</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='products-amenities'>
          <div className='row justify-content-center'>
            <div className='col-md-9'>
              <h3>Calidad constructiva que marca la diferencia</h3>
              <ProductsAmenities amenities={data.amenities} />
            </div>
          </div>
        </div>

        <ProductGallery gallery={data.gallery} title='veneto8' />

        {/* <div className='products-value'>propuesta de valor o comercial</div> */}
      </div>
    </section>
  )
}
