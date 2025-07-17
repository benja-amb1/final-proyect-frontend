import React from 'react'
import { Layout } from '../components/Layout'
import InputCard from '../components/InputCard'

const Login = () => {
  return (
    <Layout>
      <form>
        <InputCard type={'email'} placeholder={'Email'} />
        <InputCard type={'password'} placeholder={'Contraseña'} />
        <button>Login</button>
      </form>
    </Layout>
  )
}

export { Login }