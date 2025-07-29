import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../context/UserContext'

const Login = () => {

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  }

  return (
    <Layout>
      <form onSubmit={handleLogin} className='login-form'>
        <h2>Login</h2>
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