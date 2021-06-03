import React from 'react';

export default function VenetoOthers() {
  return (
    <section className='products'>
      <div className='container'>
        <h2>Tenemos una propuesta para cada tipo de inversor</h2>

        <div className='products-others'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0'>
              <div className='card'>
                <img
                  src='https://constructoradelvalle.com/ventures/veneto-5.jpg'
                  alt=''
                  className='card-image'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Veneto V</h3>
                  <h6 className='card-subtitle'>
                    En el Centro Comercial de Carlos Paz
                  </h6>
                  <div className='card-text'>
                    36 Departamentos, con unidades de 1, 2 y 3 dormitorios
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-3'>
              <div className='card'>
                <img
                  src='https://constructoradelvalle.com/ventures/veneto-6.jpg'
                  alt=''
                  className='card-image'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Veneto VI</h3>
                  <h6 className='card-subtitle'>
                    Vistas a las montañas o al centro de la ciudad
                  </h6>
                  <div className='card-text'>
                    33 Departamentos, con unidades de 1, 2 y 3 dormitorios.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
