import React from 'react';
import { FiPercent, FiSunrise, FiTrendingUp } from 'react-icons/fi';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card'>
              <FiPercent className='card-image' />
              <div className='card-body'>
                <h3 className='card-title'>Entrega Mínima</h3>
                <div className='card-text'>
                  Planes accesibles para que puedas empezar a invertir{' '}
                  <span>ahora!</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <FiSunrise className='card-image' />
              <div className='card-body'>
                <h3 className='card-title'>Plan Cosecha</h3>
                <div className='card-text'>
                  Entrega del <span>10%</span> y saldo en <span>10 pagos</span>{' '}
                  semestrales
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <FiTrendingUp className='card-image' />
              <div className='card-body'>
                <h3 className='card-title'>Sólida Inversión</h3>
                <div className='card-text'>
                  Excelente rentabilidad <span>defendiendo</span> cada m2 de tu
                  inversión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
