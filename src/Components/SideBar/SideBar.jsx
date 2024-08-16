import { OrderList, SideBarBody, SideBarWrapper } from "../../styles/Sidebar/sideBar";
import SideBarBtns from "./SideBarBtns";
import Logo from "./Logo";
import SideBarFooter from "./SideBarFooter";
import { PropTypes } from "prop-types";
import UserData from "./UserData";

const makeButtons = [
  {
    to: "empresa",
    icon: <i className="bi bi-building"></i>,
    title: "Empresa",
    subBtn: [
      "Crear Empresa",
      "Actualizar datos",
      "Eliminar datos",
      "Busqueda de empresas",
      "Crear Sucursal",
      "Actualizar datos Sucursal",
      "Eliminar datos Sucursal",
      "Buscar Sucursal",
    ],
  },
  {
    to: "puntos-de-venta",
    icon: <i className="bi bi-shop"></i>,
    title: "Puntos de venta",
    subBtn: [
      "Crear POS",
      "Generar secuencial",
      "Actualizar POS",
      "Eliminar POS",
      "Buscar POS",
    ],
  },
  {
    to: "clientes",
    icon: <i className="bi bi-person-lines-fill"></i>,
    title: "Clientes",
    subBtn: [
      "Crear clientes",
      "Actualizar clientes",
      "Eliminar clientes",
      "Buscar cliente",
    ],
  },
  {
    to: "proveedores",
    icon: <i className="bi bi-person-rolodex"></i>,
    title: "Proveedores",
    subBtn: [
      "Crear proveedor",
      "Actualizar proveedor",
      "Eliminar proveedor",
      "Buscar proveedor",
    ],
  },
  {
    to: "configuracion",
    icon: <i className="bi bi-gear-fill"></i>,
    title: "Configuración",
    subBtn: [
      "Configurar datos para facturación",
      "Ingresar Secuencial de factura",
    ],
  },
  {
    to: "facturacion",
    icon: <i className="bi bi-receipt"></i>,
    title: "Facturación",
    subBtn: [
      "Crear nueva factura",
      "Modificar en borrador",
      "Finalizar factura en borrador",
      "Eliminar factura de Borrador",
      "Buscar factura",
      "Enviar factura por email",
    ],
  },
];

const SideBar = ({ children }) => {
  return (
    <div>
      <SideBarWrapper>
        <SideBarBody>
          <Logo />
          <UserData/>
          <OrderList>
            {makeButtons.map((btn, i) => (
              <SideBarBtns
                key={i}
                to={btn.to}
                icon={btn.icon}
                title={btn.title}
                span={btn.span}
                subBtn={btn.subBtn}
              />
            ))}
          </OrderList>
        </SideBarBody>
        <SideBarFooter />
      </SideBarWrapper>
      {children}
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.string,
};
export default SideBar;
