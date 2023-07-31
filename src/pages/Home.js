import React from 'react'
import { Helmet } from 'react-helmet'
import Benefits from '../components/Benefits'
import Cta1 from '../components/Cta1'
import CtaVenetoX from '../components/CtaVenetoX'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Validation from '../components/Validation'
import VenetoVIII from '../components/VenetoVIII'
import VenetoX from '../components/VenetoX'
import VenetoIX from '../components/VenetoIX'
import Cta2 from '../components/Cta2'

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
      <VenetoIX />
      <Cta2 />
      <VenetoVIII />
      <Cta1 />
      <Validation />
      <Form />
    </>
  )
}
