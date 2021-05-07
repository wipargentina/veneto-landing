import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div>
      <h1>Hero</h1>
      <div className='my-5'>
        <Link className='btn btn-primary' to='/gracias'>
          Button Primary
        </Link>{' '}
        <Link className='btn btn-secondary' to='/404'>
          Button Secondary
        </Link>
      </div>
    </div>
  );
}
