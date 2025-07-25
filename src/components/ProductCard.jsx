import React, { useEffect, useState } from 'react'

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
    const res = await fetch('https://fakestoreapi.com/products', { method: 'DELETE' });

    if (res.ok) {
      setProductos(prev => prev.filter(p => p.id !== id))
    }
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  const openModal = () => {
    setModal(true);
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
          <img src={p.image} alt={`Imagen de ${p.title}`} />
          <p>Precio: ${p.price}</p>
          <button>Ver Producto</button>
          {user && (
            <div className='btn-act-del'>
              {!modal && (
                <>
                  <button onClick={openModal}>Actualizar</button>
                  <button onClick={() => deleteProduct(p.id)}>Eliminar</button>
                </>
              )}
              {modal && (
                <form className='form-act'>
                  <input type="text" placeholder='Título' />
                  <input type="number" min={0} placeholder='Precio' />
                  <input type="text" placeholder='Descripión' />
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