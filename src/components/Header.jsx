import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link>Inicio</Link>
          </li>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Registro</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header