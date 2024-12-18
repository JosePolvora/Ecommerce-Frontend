import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Layoutadmin from './layout/LayoutAdmin';

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Contacto from './pages/Contacto';
import Ayuda from './pages/Ayuda';
import Legales from './pages/Legales';
import TerminoCondiciones from './pages/TerminoCondiciones';
import ComoComprar from './pages/ComoComprar';
import Carrito from './pages/Carrito';
import Producto from './pages/Producto';
import Productoxcategoria from "./pages/Productoxcategoria"
import DetallexProducto from './pages/DetallexProducto';
import InicioSesion from "./pages/InicioSesion";
import Registro from './pages/Registro';
import RecuperarPassword from "./pages/RecuperarPassword"
import RestablecerPassword from './pages/RestablecerPassword';

import AdminHeader from './admin/AdminHeader';
import AdminProductos from "./admin/AdminProductos"
import AdminForm from "./admin/AdminForm";
import AdminUsuarios from './admin/AdminUsuarios';
import AdminFormUsuario from "./admin/AdminFormUsuario";
import AdminDashboard from "./admin/AdminDashboard"
import AdminCategorias from './admin/AdminCategorias';
import AdminFormCategoria from './admin/AdminFormCategoria';
import AdminEnvios from "./admin/AdminEnvios";
import AdminFormEnvio from "./admin/AdminFormEnvio";
import AdminImagenes from "./admin/AdminImagenes"
import AdminCupones from "./admin/AdminCupones"
import AdminFormCupones from "./admin/AdminFormCupones"
import AdminMensajes from "./admin/AdminMensajes"
import AdminComentarios from "./admin/AdminComentarios"


function App() {
  return (
    <div>
      <Routes>
        {/* Rutas públicas */}
        <Route path='/' element={<Layout />}>

          <Route path='/header' element={<Header />} />
          <Route path='footer' element={<Footer />} />
          <Route path='inicioSesion' element={<InicioSesion />} />
          <Route path='registro' element={<Registro />} />

          <Route path='recuperar-password' element={<RecuperarPassword />} />
          <Route path='recuperar-password/reset:token' element={<RestablecerPassword />} />

          <Route path='contacto' element={<Contacto />} />
          <Route path='ayuda' element={<Ayuda />} />
          <Route path='legales' element={<Legales />} />
          <Route path='terminoCondiciones' element={<TerminoCondiciones />} />
          <Route path='comoComprar' element={<ComoComprar />} />
          <Route path='carrito' element={<Carrito />} />

          <Route path='productos' element={<Producto />} />
          <Route path='productoxcategorias' element={<Productoxcategoria />} />
          <Route path="/productos/categoria/:id" element={<Productoxcategoria />} />
          <Route path='/detallexproducto/:id' element={<DetallexProducto />} />

        </Route>

        {/* Rutas de administración */}

        <Route path='/' element={<Layoutadmin />}>

          <Route path="admin/admindashboard" element={<AdminDashboard />} />
          <Route path="admin/adminheader" element={<AdminHeader />} />

          <Route path="admin/adminproductos" element={<AdminProductos />} />
          <Route path="admin/formproductos" element={<AdminForm />} />
          <Route path="admin/formproductos/:producto_id" element={<AdminForm />} />

          <Route path="admin/adminusuarios" element={<AdminUsuarios />} />
          <Route path="admin/formusuarios" element={<AdminFormUsuario />} />
          <Route path="admin/formusuarios/:usuario_id" element={<AdminFormUsuario />} />

          <Route path="admin/admincategorias" element={<AdminCategorias />} />
          <Route path="admin/formcategorias" element={<AdminFormCategoria />} />
          <Route path="admin/formcategorias/:categoria_id" element={<AdminFormCategoria />} />

          <Route path="admin/adminenvios" element={<AdminEnvios />} />
          <Route path="admin/formenvios" element={<AdminFormEnvio />} />
          <Route path="admin/formenvios/:envio_id" element={<AdminFormEnvio />} />

          <Route path="admin/adminimagenes" element={<AdminImagenes />} />

          <Route path="admin/admincupones" element={<AdminCupones />} />
          <Route path="admin/formcupones" element={<AdminFormCupones />} />
          <Route path="admin/formcupones/:cupones_id" element={<AdminFormCupones />} />

          <Route path="admin/adminmensajes" element={<AdminMensajes />} />
          <Route path="admin/admincomentarios" element={<AdminComentarios />} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;