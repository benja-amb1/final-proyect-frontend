import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>Parece que esta pagina no existe...</h1>
        <p>¿Redireccionar?</p>
        <Link to='/'>Inicio</Link>
      </div>
    </Layout>
  )
}

export { NotFound }