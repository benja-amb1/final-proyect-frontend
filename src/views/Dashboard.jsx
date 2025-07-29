import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { FormCard } from '../components/FormCard';

const Dashboard = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearMsg = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  }

  const agregarProducto = async (e) => {
    e.preventDefault();

    if (!image || !title || !price || isNaN(price) || price < 0) {
      setError('Todos los campos son requeridos y válidos.')
      clearMsg()
      return;
    }

    try {
      const res = await fetch('https://fakestoreapi.com/products',
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, price, image }) }
      );

      const data = await res.json();

      setProducto(data)
      setSuccess('Producto agregado correctamente.')
      clearMsg()

      setTitle('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.log(error);
      setError('Error al agregar producto.')
    }
  }

  return (
    <Layout>
      <form className='agregar-form' onSubmit={agregarProducto}>
        <h2>Agregar Producto</h2>

        <FormCard title={title} setTitle={setTitle} price={price} setPrice={setPrice} image={image} setImage={setImage} />

        <button>Agregar</button>
        {error && <p className='msgError'>{error}</p>}
        {success && <p className='msgSuccess'>{success}</p>}
      </form>

    </Layout>
  )
}

export { Dashboard }