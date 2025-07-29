import React, { useEffect, useState } from 'react'
import { FormCard } from './FormCard';

const ProductCard = () => {



  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');

      const data = await res.json();

      setProductos(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const deleteProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' });

    if (res.ok) {
      setProductos(prev => prev.filter(p => p.id !== id))
    }
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  const openModal = (id) => {
    setModal(id);
  }

  const closeModal = () => {
    setModal(false);
  }

  if (loading) return <p>Cargando productos...</p>

  return (
    <section className='productos-container'>
      {productos.map(p => (
        <article className='producto' key={p.id}>
          <h2>{p.title}</h2>
          <img src={p.image} alt={`Imagen de ${p.title}`} loading='lazy' />
          <p>Precio: ${p.price}</p>
          <button>Ver Producto</button>
          {user && (
            <div className='btn-act-del'>
              {modal !== p.id && (
                <>
                  <button onClick={() => openModal(p.id)}>Actualizar</button>
                  <button onClick={() => deleteProduct(p.id)}>Eliminar</button>
                </>
              )}
              {modal === p.id && (
                <form className='form-act'>

                  <FormCard />

                  <button>Confirmar</button>
                  <button onClick={closeModal}>Cancelar</button>
                </form>
              )}
            </div>
          )}
        </article>
      ))}
    </section>
  )
}

export default ProductCard