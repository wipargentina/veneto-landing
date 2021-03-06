import React from 'react';
import { Link } from 'react-router-dom';
import LogoCustomer from '../assets/static/logo-veneto.svg';

export default function Navbar() {
  return (
    <nav className='navbar navbar-light bg-light sticky-top'>
      <div className='container'>
        <Link className='navbar-brand mx-auto' to='/'>
          <img src={LogoCustomer} alt='' />
        </Link>
      </div>
    </nav>
  );
}
