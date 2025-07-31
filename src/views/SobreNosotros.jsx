import { Layout } from "../components/Layout";

const SobreNosotros = () => {
  return (
    <Layout>
      <section id="sobre-nosotros">
        <h1>Sobre Nosotros</h1>

        <section>
          <h2>¿De qué trata el proyecto?</h2>
          <p>
            Este proyecto es una tienda online de productos donde los usuarios pueden explorar el catálogo,
            registrarse y autenticarse para acceder a funcionalidades especiales. Los usuarios autorizados
            pueden agregar, actualizar o eliminar productos, garantizando que solo quienes tienen permisos puedan administrar el inventario.
          </p>
        </section>

        <section>
          <h2>¿A quién está dirigido?</h2>
          <p>
            Esta tienda está diseñada para clientes que buscan productos específicos y también para administradores o vendedores
            que necesitan gestionar el catálogo de manera sencilla y segura mediante autenticación y rutas privadas.
          </p>
        </section>

        <section>
          <h2>¿Qué tecnologías o enfoques se usaron?</h2>
          <p>
            El proyecto está desarrollado con React y JavaScript para el frontend, y CSS para el estilo.
            Se implementaron rutas privadas para proteger ciertas áreas, y un sistema de autenticación para controlar el acceso.
          </p>
        </section>
      </section>
    </Layout>
  )
}

export { SobreNosotros };
