import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../assets/images/react-icon.webp'
import { useAuth } from '../context/UserContext';

const Header = () => {

  const [openHamb, setOpenHamb] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setOpenHamb(valor => !valor)
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <header>

      <div>
        <Link to='/'>
          <img src={ReactLogo} alt="Logo de React" />
        </Link>
      </div>



      <button onClick={toggleMenu} className='menuHamb'>{openHamb ? '✖' : '☰'}</button>
      <nav className={openHamb ? 'open' : ''}>
        <ul >
          {user && (
            <>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Cerrar sesión</button>

              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/registro'>Registro</Link>
              </li>
            </>
          )}

        </ul>
      </nav>
    </header>
  )
}

export default Header