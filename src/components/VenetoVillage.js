import React from 'react';
import HeroImage from '../assets/static/hero-bg.webp';
import AmenitiesImage1 from '../assets/static/veneto-village-amenities-1.jpg';
import AmenitiesImage2 from '../assets/static/veneto-village-amenities-2.jpg';
import AmenitiesImage3 from '../assets/static/veneto-village-amenities-3.jpg';
import { FiDollarSign, FiClock, FiStar } from 'react-icons/fi';
import ProductGallery from './ProductGallery';
import ProductsAmenities from './VenetoVIII/ProductsAmenties';

import data from '../api/veneto-village.json';
console.log(data);

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
        <div className='products-grid'>
          <div className='grid-item item-1'>
            <img src={AmenitiesImage1} alt='imagen' loading='lazy' />
          </div>
          <div className='grid-item item-2'>
            <img src={AmenitiesImage2} alt='imagen' loading='lazy' />
          </div>
          <div className='grid-item item-3'>
            <img src={AmenitiesImage3} alt='imagen' loading='lazy' />
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
                  <div className='card-title'>premium</div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <FiClock className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>entrega</div>
                  <div className='card-title'>inmediata</div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <FiStar className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>enprendimiento</div>
                  <div className='card-title'>único</div>
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
              <h3>
                Arte, Tecnología, Diseño y Calidad confluyen para generar un
                producto único.
              </h3>
              {data.amenities && (
                <ProductsAmenities amenities={data.amenities} />
              )}
            </div>
          </div>
        </div>

        {data.gallery && (
          <ProductGallery gallery={data.gallery} title='veneto-village' />
        )}

        {/* <div className='products-value'>propuesta de valor o comercial</div> */}
      </div>
    </section>
  );
}
