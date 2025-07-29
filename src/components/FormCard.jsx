const FormCard = ({ title, setTitle, price, setPrice, image, setImage }) => {
  return (
    <>
      <label>Titulo:</label>
      <input type="text" placeholder='Titulo' value={title} onChange={e => setTitle(e.target.value)} />
      <label>Precio:</label>
      <input type="number" min={0} placeholder='Precio' value={price} onChange={e => setPrice(e.target.value)} />
      <label>Imagen:</label>
      <input type="file" placeholder='Imagen' value={image} onChange={e => setImage(e.target.value)} />
    </>
  )
}

export { FormCard }