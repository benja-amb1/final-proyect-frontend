import React, { useEffect, useState } from 'react'

const ProductCard = () => {



  const [user, setUser] = useState(true);
  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    const res = await fetch('https://fakestoreapi.com/products');

    const data = await res.json();

    setProductos(data)
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

  return (
    <section className='productos-container'>
      {productos.map(p => (
        <article className='producto' key={p.id}>
          <h2>{p.title}</h2>
          <p>${p.price}</p>
          <img src={p.image} alt={`Imagen de ${p.title}`} />
          <button>Ver Producto</button>
          {user && (
            <div className='btn-act-del'>
              {!modal && (
                <>
                  <button onClick={openModal}>Actualizar</button>
                  <button>Eliminar</button>
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