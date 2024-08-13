import { Link } from "react-router-dom";
import { OrderList, SideBarBody, SideBarWrapper } from "../../styles/sideBar";
import SideBarBtns from "./SideBarBtns";


const makeButtons = [
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-buildings"></i>,
    title: "Empresa",
    subBtn:["Crear Empresa", "Actualizar datos","Eliminar datos", "Busqueda de empresas","Crear Sucursal","Actualziar datos Sucursal","Eliminar datos Sucursal","Buscar Sucursal"],
  },
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-shop"></i>,
    title: "Puntos de venta",
    subBtn:["Crear puntos de venta", "Generar Secuencial","Actualizar puntos de venta","Eliminar puntos de venta", "Buscar Puntos de venta"],
  },
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-person-lines-fill"></i>,
    title: "Clientes",
    subBtn:["Crear Clientes", "Actualizar Clientes","Eliminar Clientes", "Buscar Cliente"],
  },
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-person-rolodex"></i>,
    title: "Proveedores",
    subBtn:["Crear Proveedor", "Actualizar Proveedor","Eliminar Proveedor", "Buscar Proveedor"],
  },
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-gear-fill"></i>,
    title: "Configuración",
    subBtn:["Configurar datos para facturación", "Ingresar Secuencial de factura"],
  },
  {
    to: <Link to="/home"></Link>,
    icon: <i className="bi bi-receipt"></i>,
    title: "Facturación",
    subBtn:["Crear nueva Factura", "Modificar en borrador","Finalizar Factura en borrador", "Eliminar factura de Borrador","Buscar Factura", "Enviar factura por email"],
  },
]

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarBody>
      <OrderList>
        {makeButtons.map((btn, i) =>(
          <SideBarBtns key={i} to={btn.to} icon={btn.icon} title={btn.title} />
        ))}
      </OrderList>
      </SideBarBody>
    </SideBarWrapper>
  );
};

export default SideBar;