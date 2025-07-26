import React, { useState } from 'react'
import { Layout } from '../components/Layout'

const Registro = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearMsg = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  }

  const handleSubmit = async (e) => {

    setError('');
    setSuccess('');

    e.preventDefault();
    if (!name || !email || !password) {
      setError('Todos los campos son requeridos.')
      clearMsg();
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe contener al menos 6 caracteres.');
      clearMsg();
      return;
    }

    try {
      const res = await fetch('https://fakestoreapi.com/users', { method: 'POST', body: JSON.stringify(name, email, password) });

      const data = await res.json();

      if (res.ok) {
        setSuccess('Usuario creado correctamente.')
        clearMsg()
      }

      setUser(data)
      console.log(data);
    } catch (error) {
      console.log(error);
      setError('Error al crear usuario.')
      clearMsg();
    }
  }


  return (
    <Layout>
      <form className='registro-form' onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        <label>Nombre de usuario:</label>
        <input type="text" placeholder='Nombre de usuario' onChange={e => setName(e.target.value)} value={name} />
        <label>Email:</label>
        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} />
        <label>Contraseña:</label>
        <input type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} value={password} />

        <button>Registrarse</button>
        {error && <p className='msgError'>{error}</p>}
        {success && <p className='msgSuccess'>{success}</p>}
      </form>
    </Layout>
  )
}

export { Registro }