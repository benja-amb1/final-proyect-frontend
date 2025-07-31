import React from 'react'
import { Layout } from '../components/Layout'
import ProductCard from '../components/ProductCard'

const Inicio = () => {
  return (
    <Layout>
      <div id='inicio'>
        <h1>Bienvenido a Products Map!</h1>
        <h2>Aquí encontrarás los mejores productos al mejor precio.</h2>
      </div>
      <ProductCard />
    </Layout>
  )
}

export { Inicio }