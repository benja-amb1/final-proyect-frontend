import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const clearMsg = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  }

  const handleLogin = async (e) => {
    setError('');
    setSuccess('');
    e.preventDefault();

    if (!username || !password) {
      setError('Todos los campos son requeridos.');
      clearMsg();
      return;
    }

    const isLogin = await login(username, password);

    if (!isLogin) {
      setError('El username o contraseña son inválidos.');
      clearMsg();
      return;
    }

    if (isLogin) {
      setUsername('');
      setPassword('')
      navigate('/')
    }

  }

  return (
    <Layout>
      <form onSubmit={handleLogin} className='login-form'>
        <h2>Login</h2>
        <label>Nombre de usuario:</label>
        <input type="text" placeholder='Nombre de usuario' onChange={e => setUsername(e.target.value)} value={username} />
        <label>Contraseña:</label>
        <input type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} value={password} />
        <button>Login</button>
        {error && <p className='msgError'>{error}</p>}
        {success && <p className='msgSuccess'>{success}</p>}
      </form>
    </Layout>
  )
}

export { Login }