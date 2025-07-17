import React from 'react'
import { Layout } from '../components/Layout'

const Registro = () => {
  return (
    <Layout>
      <form className='registro-form'>
        <h2>Registrarse</h2>
        <label>Nombre de usuario:</label>
        <input type="text" placeholder='Nombre de usuario' />
        <label>Email:</label>
        <input type="email" placeholder='Email' />
        <label>Contraseña:</label>
        <input type="password" placeholder='Contraseña' />

        <button>Registrarse</button>
      </form>
    </Layout>
  )
}

export { Registro }