import React from 'react';
import Logo from '../assets/static/logo-ponte-di-veneto.png';
import HeroImage from '../assets/static/hero-veneto-x.jpg';
import AmenitiesImage1 from '../assets/static/veneto-10-amenities-1.jpg';
import AmenitiesImage2 from '../assets/static/veneto-10-amenities-2.jpg';
import AmenitiesImage3 from '../assets/static/veneto-10-amenities-3.jpg';
import { FiDollarSign, FiClock, FiStar } from 'react-icons/fi';
import ProductsAmenities from './VenetoVIII/ProductsAmenties';
import ProductGallery from './ProductGallery';

import data from '../api/veneto-10.json';

export default function VenetoX() {
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
              <img src={Logo} alt='logo' className='logo' />
              <h1>Veneto X</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2>El nuevo ícono de Villa Carlos Paz</h2>

        <p className='lead'>
          Una propuesta única, 2 torres en altura destinadas a unidades de alta
          gama. 12 niveles, 11 pisos de departamentos y 1 nivel con una terraza
          optimizada con los mejores amenities. Ambas torres, estarán
          comunicadas en lo más alto por un puente mirador vidriado donde se
          emplaza el salón de usos múltiples y usted podrá ver toda la ciudad.{' '}
          <br />
          Un lugar ideal para disfrutar de los mejores momentos acompañados por
          visuales únicas al lago, y todo el Valle de Punilla.
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
      </div>

      <div className='container'>
        <div className='products-amenities'>
          <div className='row justify-content-center'>
            <div className='col-md-9'>
              <h3>
                Arte, Tecnología, Diseño y Calidad confluyen para generar un
                producto único.
              </h3>
              <ProductsAmenities amenities={data.amenities} />
            </div>
          </div>
        </div>

        <ProductGallery gallery={data.gallery} title='veneto10' />

        {/* <div className='products-value'>propuesta de valor o comercial</div> */}
      </div>
    </section>
  );
}
