import React from 'react'

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <footer>
      <p>Sitio desarrollado por Benja. Todos los derechos reservados &copy; {date}.</p>
    </footer>
  )
}

export default Footer