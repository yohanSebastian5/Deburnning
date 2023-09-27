import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLogin from "../pages/Login/PageLogin.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PageLogin />} />
        {/* <Route element={<ProtectRoute />}>
          <Route path="/" element={<ContratosPage />} />
          <Route path="/usuarios" element={<PageUsuarios />} />
          <Route path="/contratos" element={<ContratosPage />} />
          <Route path="/tareas" element={<PageTareas />} />
          <Route path="/ejemplos" element={<Ejemplos />} />
          <Route path="/procesos" element={<PageProcesos />} />
        </Route> */}
      </Routes>
    </Router>
  );
}
