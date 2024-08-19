import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Clientes from '../Components/Pages/Clientes/Clientes';
import Configuracion from '../Components/Pages/Configuracion/Configuracion';
import Empresa from '../Components/Pages/Empresa/Empresa';
import Facturacion from '../Components/Pages/Facturacion/Facturacion';
import Proveedores from '../Components/Pages/Proveedores/Proveedores';
import Pos from '../Components/Pages/Puntos de venta/Pos';
import SideBar from '../Components/SideBar/SideBar';
import UserSignIn from '../context/UserSignIn';
import UserRegister from '../context/UserRegister'
import CrearEmpresa from '../Components/SubPages/Clientes/CrearEmpresa';
import ActualizarDatos from '../Components/SubPages/Clientes/ActualizarDatos';
import EliminarDatos from '../Components/SubPages/Clientes/EliminarDatos';
import BusquedaEmpresa from '../Components/SubPages/Clientes/BusquedaEmpresa';
import CrearSucursal from '../Components/SubPages/Clientes/CrearSucursal';

const Router = () => (
  <BrowserRouter>
  <SideBar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/configuracion" element={<Configuracion/>} />
      <Route path="/empresa" element={<Empresa/>} />
      <Route path="/facturacion" element={<Facturacion/>} />
      <Route path="/proveedores" element={<Proveedores/>} />
      <Route path="/puntos-de-venta" element={<Pos/>} />
      <Route path="/usuario-acceso" element={<UserSignIn/>} />
      <Route path="/usuario-registro" element={<UserRegister/>} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/empresa/crearempresa" element={<CrearEmpresa/>} />
      <Route path="/empresa/actualizardatos" element={<ActualizarDatos/>} />
      <Route path="/empresa/eliminardatos" element={<EliminarDatos/>} />
      <Route path="/empresa/busquedadeempresas" element={<BusquedaEmpresa/>} />
      <Route path='/empresa/crearsucursal' element={<CrearSucursal />} />
    </Routes>
    </SideBar>
</BrowserRouter>
);

export default Router;