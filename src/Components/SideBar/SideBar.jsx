import { OrderList, SideBarBody, SideBarWrapper } from "../../styles/sideBar";
import SideBarBtns from "./SideBarBtns";
import Logo from "./Logo";
import SideBarFooter from "./SideBarFooter";
import { PropTypes } from "prop-types";
import UserData from "./UserData";

const makeButtons = [
  {
    to: "empresa",
    icon: <i className="bi bi-buildings"></i>,
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
      "Crear puntos de venta",
      "Generar Secuencial",
      "Actualizar puntos de venta",
      "Eliminar puntos de venta",
      "Buscar Puntos de venta",
    ],
  },
  {
    to: "clientes",
    icon: <i className="bi bi-person-lines-fill"></i>,
    title: "Clientes",
    subBtn: [
      "Crear Clientes",
      "Actualizar Clientes",
      "Eliminar Clientes",
      "Buscar Cliente",
    ],
  },
  {
    to: "proveedores",
    icon: <i className="bi bi-person-rolodex"></i>,
    title: "Proveedores",
    subBtn: [
      "Crear Proveedor",
      "Actualizar Proveedor",
      "Eliminar Proveedor",
      "Buscar Proveedor",
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
      "Crear nueva Factura",
      "Modificar en borrador",
      "Finalizar Factura en borrador",
      "Eliminar factura de Borrador",
      "Buscar Factura",
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
                // handleClick={handleClick}
              />
            ))}
          </OrderList>
          <SideBarFooter />
        </SideBarBody>
      </SideBarWrapper>
      {children}
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.string,
};
export default SideBar;
