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
import CrearEmpresa from '../Components/SubPages/Empresa/CrearEmpresa';
import ActualizarDatos from '../Components/SubPages/Empresa/ActualizarDatos';
import EliminarDatos from '../Components/SubPages/Empresa/EliminarDatos';
import BusquedaEmpresa from '../Components/SubPages/Empresa/BusquedaEmpresa';
import CrearSucursal from '../Components/SubPages/Empresa/CrearSucursal';
import ActualizarSucursal from '../Components/SubPages/Empresa/ActualizarSucursal';
import EliminarDatosSucursal from '../Components/SubPages/Empresa/EliminarDatosSucursal';
import BuscarSucursal from '../Components/SubPages/Empresa/BuscarSucursal';
import CrearPos from '../Components/SubPages/Puntos-de-venta/CrearPos';
import GenerarSecuencial from '../Components/SubPages/Puntos-de-venta/GenerarSecuencial';
import ActualizarPos from '../Components/SubPages/Puntos-de-venta/ActualizarPos';
import EliminarPos from '../Components/SubPages/Puntos-de-venta/EliminarPos';
import BuscarPos from '../Components/SubPages/Puntos-de-venta/BuscarPos';
import CrearClientes from '../Components/SubPages/Clientes/CrearClientes';
import ActualizarClientes from '../Components/SubPages/Clientes/ActualizarClientes';

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
      <Route path='/empresa/actualizardatossucursal' element={<ActualizarSucursal/>} />
      <Route path='/empresa/eliminardatossucursal' element={<EliminarDatosSucursal />} />\
      <Route path='/empresa/buscarsucursal' element={<BuscarSucursal />} />
      <Route path='/puntos-de-venta/crearpos' element={<CrearPos />}/>
      <Route path='/puntos-de-venta/generarsecuencial' element={<GenerarSecuencial />} />
      <Route path='puntos-de-venta/actualizarpos' element={<ActualizarPos/>} />
      <Route path='puntos-de-venta/eliminarpos' element={<EliminarPos />}/>
      <Route path='puntos-de-venta/buscarpos' element={<BuscarPos />}/>
      <Route path='clientes/crearclientes' element={<CrearClientes />}/>
      <Route path='clientes/actualizarclientes' element={<ActualizarClientes />}/>
    </Routes>
    </SideBar>
</BrowserRouter>
);

export default Router;