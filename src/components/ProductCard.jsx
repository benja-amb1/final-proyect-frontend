import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/UserContext';

const ProductCard = () => {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");

  const obtenerProductos = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const deleteProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProductos(prev => prev.filter(p => p.id !== id));
    }
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  const openModal = (product) => {
    setModal(product.id);
    setProductToEdit(product);
    setTitleEdit(product.title);
    setPriceEdit(product.price);
    setDescriptionEdit(product.description);
    setCategoryEdit(product.category);
    setImageEdit(product.image);
  }

  const closeModal = () => {
    setModal(false);
    setProductToEdit(null);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      });

      const data = await response.json();
      if (response.ok) {
        setProductos(prev =>
          prev.map(prod => prod.id === productToEdit.id ? data : prod)
        );
      }
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <p>Cargando productos...</p>

  return (
    <section className='productos-container'>
      {productos.map(p => (
        <article className='producto' key={p.id}>
          <h2>{p.title}</h2>
          <img src={p.image} alt={`Imagen de ${p.title}`} loading='lazy' />
          <p>Precio: ${p.price}</p>
          <p>{p.description}</p>
          <p>Categoría: {p.category}</p>
          {user && (
            <div className='btn-act-del'>
              {modal !== p.id && (
                <>
                  <button onClick={() => openModal(p)}>Actualizar</button>
                  <button onClick={() => deleteProduct(p.id)}>Eliminar</button>
                </>
              )}
              {modal === p.id && (
                <form className='form-act' onSubmit={handleUpdate}>
                  <label htmlFor="titleEdit">Título:</label>
                  <input
                    id="titleEdit"
                    type="text"
                    placeholder="Título"
                    value={titleEdit}
                    onChange={e => setTitleEdit(e.target.value)}
                  />

                  <label htmlFor="priceEdit">Precio:</label>
                  <input
                    id="priceEdit"
                    type="number"
                    placeholder="Precio"
                    value={priceEdit}
                    onChange={e => setPriceEdit(e.target.value)}
                  />

                  <label htmlFor="descriptionEdit">Descripción:</label>
                  <textarea
                    id="descriptionEdit"
                    placeholder="Descripción"
                    value={descriptionEdit}
                    onChange={e => setDescriptionEdit(e.target.value)}
                  />

                  <label htmlFor="categoryEdit">Categoría:</label>
                  <input
                    id="categoryEdit"
                    type="text"
                    placeholder="Categoría"
                    value={categoryEdit}
                    onChange={e => setCategoryEdit(e.target.value)}
                  />

                  <label htmlFor="imageEdit">Imagen URL:</label>
                  <input
                    id="imageEdit"
                    type="text"
                    placeholder="Imagen URL"
                    value={imageEdit}
                    onChange={e => setImageEdit(e.target.value)}
                  />
                  <div>
                    <button type="submit">Confirmar</button>
                    <button type="button" onClick={closeModal}>Cancelar</button>
                  </div>
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
