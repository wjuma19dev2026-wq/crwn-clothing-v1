import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importa tus componentes/páginas aquí
import Navigation from "./shared/navigation";
import Home from "./pages/home/home.component";
import Shop from "./pages/shop/Shop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta inicial sugerida */}
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        {/* Ruta de redirección o 404  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
