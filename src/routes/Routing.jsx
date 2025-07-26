import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "../views/Inicio"
import { Dashboard } from "../views/Dashboard"
import { Registro } from "../views/Registro"
import { Login } from "../views/Login"
import { NotFound } from "../views/NotFound"

const Routing = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export { Routing }