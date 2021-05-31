import React from 'react';
import { Helmet } from 'react-helmet';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import ImageVeneto8 from '../assets/static/hero-bg-2.webp';
import ImageVenetoVillage from '../assets/static/hero-bg.webp';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gracias!</title>
      </Helmet>
      <section className='thanks'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <h1>¡Has dado un gran paso!</h1>
              <p className='lead'>
                Queremos agradecerte por haber completado el formulario con tus
                datos, los mismos ya fueron enviados a nuestro equipo comercial
                para que se pongan en contacto contigo y te brinden toda la
                información necesaria
              </p>
              <h5 className='mb-4'>
                Te invitamos a que descarges el brochure de nuestros
                emprendimientos
              </h5>
              <div className='row justify-content-center mb-5'>
                <div className='col-5'>
                  <a
                    id='brochure-fontana'
                    href='https://drive.google.com/file/d/15dxGU75Xn5qvE1ZhbHffKteLfD-EHKJt/view'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card'
                  >
                    <img src={ImageVeneto8} alt='' className='card-image' />
                    <div className='card-body'>
                      <div className='card-title'>Brochure Veneto VIII</div>
                    </div>
                  </a>
                </div>
                <div className='col-5'>
                  <a
                    id='brochure-village'
                    href='/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card'
                  >
                    <img
                      src={ImageVenetoVillage}
                      alt=''
                      className='card-image'
                    />
                    <div className='card-body'>
                      <div className='card-title'>Brochure Veneto Village</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='cta'>
                <h5 className='mb-3'>
                  Visita nuestra web y conoce el resto de nuestros
                  emprendimientos
                </h5>
                <a
                  id='link-web'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://constructoradelvalle.com/'
                  className='btn btn-cta'
                >
                  https://constructoradelvalle.com/
                </a>
              </div>
              <h6 className='mb-3'>
                Te invitamos a que nos sigas en nuestras redes
              </h6>
              <a
                id='btn-facebook'
                href='https://www.facebook.com/ConstructoradelValleOficial'
                rel='noopener noreferrer'
                target='_blank'
                className='button btn btn-outline-primary mb-5 mx-1'
              >
                <FaFacebookF className='facebook' />
                Facebook
              </a>
              <a
                id='btn-instagram'
                href='https://www.instagram.com/constructoradelvallesa/'
                rel='noopener noreferrer'
                target='_blank'
                className='button btn btn-outline-primary mb-5 mx-1'
              >
                <FaInstagram className='instagram' />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
