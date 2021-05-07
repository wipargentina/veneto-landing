import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand mx-auto' to='/'>
          Logo Cliente
        </Link>
      </div>
    </nav>
  );
}
