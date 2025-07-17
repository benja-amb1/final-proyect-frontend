import React from 'react'
import { Layout } from '../components/Layout'

const Login = () => {
  return (
    <Layout>
      <form>
        <label>Email:</label>
        <input type="email" placeholder='Email' />
        <label>Contraseña:</label>
        <input type="password" placeholder='Contraseña' />
        <button>Login</button>
      </form>
    </Layout>
  )
}

export { Login }