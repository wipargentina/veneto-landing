import React from 'react'
import Logo from '../assets/static/logo-fontana-di-veneto.png'
import HeroImage from '../assets/static/hero-bg-2.webp'
import AmenitiesImage1 from '../assets/static/veneto-8-amenities-1.webp'
import AmenitiesImage2 from '../assets/static/veneto-8-amenities-2.webp'
import AmenitiesImage3 from '../assets/static/veneto-8-amenities-3.webp'
import { FiDollarSign, FiClock, FiStar } from 'react-icons/fi'
import ProductsAmenities from './VenetoVIII/ProductsAmenties'
import ProductGallery from './ProductGallery'

import data from '../api/veneto-8.json'

export default function VenetoVIII() {
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
              <h1>Veneto VIII</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2>La oportunidad que estabas esperando</h2>

        <p className='lead'>
          Ubicado estratégicamente sobre la Calle 9 de Julio 355, a tan solo 20
          metros del nuevo puente peatonal. <br />
          Departamentos de 1 a 3 dormitorios, desde 50 hasta 87 m2 propios
          habitables, libres de muro.
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
                  <div className='card-title'>en Obra</div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <FiClock className='card-image' />
                <div className='card-body'>
                  <div className='card-text'>Entrega</div>
                  <div className='card-title'>2024</div>
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
              <h3>
                Arte, Tecnología, Diseño y Calidad confluyen para generar un
                producto único.
              </h3>
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
