import React from 'react';
import LogoCDV from '../assets/static/logo-cdv.svg';

export default function Validation() {
  return (
    <section className='validation'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h2>
              Invertir en <span>VENETO</span> es invertir en seguridad
            </h2>
            <p className='lead'>
              Contamos con un equipo interdisciplinario de profesionales y
              empresas de primera línea en el país, respaldados en los valores y
              la trayectoria de nuestra empresa:
            </p>
            <ul>
              <li>La calidad de nuestros proyectos.</li>
              <li>La seriedad y compromiso con nuestros inversores.</li>
              <li>Servicios que nuestro equipo tiene pensado para vos!.</li>
            </ul>
            <h6>Desarrolla</h6>
            <img src={LogoCDV} alt='' className='logo' />
          </div>
        </div>
      </div>
    </section>
  );
}
