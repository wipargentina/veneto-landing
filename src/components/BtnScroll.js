import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function BtnScroll({
  textBtn = 'Button',
  classBtn = 'btn btn-primary'
}) {
  return (
    <Scroll
      to='form'
      spy={true}
      smooth={true}
      offset={-100}
      duration={599}
      className={`btn ${classBtn} btn-scroll`}
    >
      {textBtn}
    </Scroll>
  );
}
