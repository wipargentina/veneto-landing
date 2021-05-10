import React from 'react';
import Benefits from '../components/Benefits';
import Cta1 from '../components/Cta1';
import Cta2 from '../components/Cta2';
import Cta3 from '../components/Cta3';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import VenetoOthers from '../components/VenetoOthers';
import VenetoVIII from '../components/VenetoVIII';
import VenetoVillage from '../components/VenetoVillage';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <VenetoVIII />
      <Cta1 />
      <VenetoVillage />
      <Cta2 />
      <VenetoOthers />
      <Cta3 />
      <Testimonials />
      <Form />
    </>
  );
}
