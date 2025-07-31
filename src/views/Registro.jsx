import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const clearMsg = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password) {
      setError('Todos los campos son requeridos.')
      clearMsg();
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe contener al menos 6 caracteres.');
      clearMsg();
      return;
    }

    const isRegister = await register(username, email, password);
    if (!isRegister) {
      setError('Error al crear el usuario.');
      return;
    }

    if (isRegister) {
      setSuccess('Usuario creado correctamente.');
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }
  }



  return (
    <Layout>
      <form className='registro-form' onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        <label>Nombre de usuario:</label>
        <input type="text" placeholder='Nombre de usuario' onChange={e => setUsername(e.target.value)} value={username} />
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