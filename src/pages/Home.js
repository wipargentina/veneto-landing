import React from 'react';
import { Helmet } from 'react-helmet';
import Benefits from '../components/Benefits';
import Cta1 from '../components/Cta1';
import Cta3 from '../components/Cta3';
import CtaVenetoX from '../components/CtaVenetoX';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Validation from '../components/Validation';
import VenetoOthers from '../components/VenetoOthers';
import VenetoVIII from '../components/VenetoVIII';
import VenetoX from '../components/VenetoX';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Edificios Veneto: Tu departamento en las sierras de Córdoba
        </title>
      </Helmet>
      <Hero />
      <Benefits />
      <VenetoX />
      <CtaVenetoX />
      <VenetoVIII />
      <Cta1 />
      <VenetoOthers />
      <Cta3 />
      <Validation />
      {/* <Testimonials /> */}
      <Form />
    </>
  );
}
