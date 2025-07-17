import React from 'react'
import { Layout } from '../components/Layout'

const Dashboard = () => {
  return (
    <Layout>
      <form className='agregar-form'>
        <h2>Agregar Producto</h2>
        <label>Agregar nuevo producto:</label>
        <input type="text" placeholder='Nombre del producto...' />
        <button>Agregar</button>
      </form>

    </Layout>
  )
}

export { Dashboard }