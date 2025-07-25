import React, { useState } from 'react'

const ProductCard = () => {

  const productos = [
    { id: 1, nombre: "Auriculares Bluetooth", precio: 12000, stock: 15 },
    { id: 2, nombre: "Mouse Gamer", precio: 8500, stock: 30 },
    { id: 3, nombre: "Teclado Mecánico", precio: 18500, stock: 20 },
    { id: 4, nombre: "Monitor 24 pulgadas", precio: 75000, stock: 8 },
    { id: 5, nombre: "Silla Gamer", precio: 95000, stock: 5 },
    { id: 6, nombre: "Notebook Lenovo i5", precio: 350000, stock: 10 },
    { id: 7, nombre: "Memoria RAM 16GB", precio: 25000, stock: 25 },
    { id: 8, nombre: "Placa de Video RTX 4060", precio: 580000, stock: 7 },
    { id: 9, nombre: "Disco SSD 1TB", precio: 42000, stock: 18 },
    { id: 10, nombre: "Fuente 650W", precio: 38000, stock: 12 }
  ];

  const [user, setUser] = useState(true);
  const [modal, setModal] = useState(false);

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
          <h2>{p.nombre}</h2>
          <p>${p.precio}</p>
          <p>Stock: {p.stock}</p>
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