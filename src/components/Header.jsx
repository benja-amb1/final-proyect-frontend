import React from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../assets/images/react-icon.webp'

const Header = () => {
  return (
    <header>

      <div>
        <Link to='/'>
          <img src={ReactLogo} alt="Logo de React" />
        </Link>
      </div>



      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/registro'>Registro</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header