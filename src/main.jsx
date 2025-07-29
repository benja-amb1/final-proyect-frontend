import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routing } from './routes/Routing'
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Routing />
    </UserProvider>
  </StrictMode>,
)
