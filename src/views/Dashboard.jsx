import React from 'react'
import { Layout } from '../components/Layout'

const Dashboard = () => {
  return (
    <Layout>
      <label>Añadir nuevo producto:</label>
      <input type="text" placeholder='Nombre del producto...' />
      <button>Añadir</button>
    </Layout>
  )
}

export { Dashboard }