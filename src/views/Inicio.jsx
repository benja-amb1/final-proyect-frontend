import React from 'react'
import { Layout } from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import CreditCard from '../assets/icons/credit-card.svg'
import Shield from '../assets/icons/shield.svg'
import Truck from '../assets/icons/truck.svg'

const Inicio = () => {
  return (
    <Layout>
      <section>
        <div id='inicio'>
          <h1>Bienvenido a Products Map!</h1>
          <h2>Aquí encontrarás los mejores productos al mejor precio.</h2>
        </div>
      </section>
      <ProductCard />

      <section className='entregas'>
        <div className='entregas-cards'>

          <div className='entrega-item'>
            <img src={CreditCard} alt="Icono de Tarjeta de Crédito" />
            <h3>Hasta 18 cuotas</h3>
            <p>abonando con tarjetas de crédito</p>
          </div>

          <div className='entrega-item'>
            <img src={Truck} alt="Icono de Camión de Envío" />
            <h3>Envíos a todo el país</h3>
            <p>a través de OCA</p>
          </div>

          <div className='entrega-item'>
            <img src={Shield} alt="Icono de Garantía" />
            <h3>Garantía oficial</h3>
            <p>de hasta 36 meses en todos los productos</p>
          </div>

        </div>

        <Link to='/login' className='btn-contactar'>Identificarse</Link>
      </section>
    </Layout>
  )
}

export { Inicio }