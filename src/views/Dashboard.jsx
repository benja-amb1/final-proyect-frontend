import { useState } from "react"
import { Layout } from "../components/Layout"

const Dashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const clearMsg = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess('');

    if (!name || !price || !description) {
      setError('Debes completar todos los campos.');
      clearMsg();
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: Number(price),
      description: description,
      category: "",
      image: ""
    }

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });

      const data = await response.json();

      setProduct(data);
      setName('');
      setPrice(0);
      setDescription('');
      setSuccess('Producto agregado correctamente.');
      clearMsg();
    } catch (err) {
      console.error(err);
      setError('Error al agregar producto.');
      clearMsg();
    }
  }

  return (
    <Layout>
      <section>
        <form className='agregar-form' onSubmit={handleSubmit}>
          <h2>Agregar nuevo producto</h2>
          <label htmlFor="name">Título del producto:</label>
          <input
            id="name"
            type="text"
            placeholder="Título del producto"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="price">Precio:</label>
          <input
            id="price"
            type="number"
            placeholder="Precio"
            value={price}
            onChange={e => setPrice(e.target.value)}
            min={0}
          />

          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            placeholder="Descripción"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows="4"
          />

          <label htmlFor="category">Categoría:</label>
          <input
            id="category"
            type="text"
            placeholder="Categoría"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            id="image"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={e => setImage(e.target.value)}
          />


          <button>Agregar producto</button>

          {error && <p className="msgError">{error}</p>}
          {success && <p className="msgSuccess">{success}</p>}
        </form>

        {product && (
          <div className="producto-creado">
            <h3>Producto creado:</h3>
            <p>Título: <strong>{product.title}</strong></p>
            <p>Precio: ${product.price}</p>
            <p>Descripcion: {product.description}</p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export { Dashboard }
