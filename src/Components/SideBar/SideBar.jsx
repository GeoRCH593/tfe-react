import { OrderList, SideBarBody, SideBarWrapper } from "../../styles/sideBar";


const makeButtons = [
  {
    to: "/dashboard/home",
    icon: <i className="fa-solid fa-house"></i>,
    title: "Empresa",
    subBtn:["Crear Empresa", "Actualizar datos","Eliminar datos", "Busqueda de empresas","Crear Sucursal","Actualziar datos Sucursal","Eliminar datos Sucursal","Buscar Sucursal"],
  },
  {
    to: "/dashboard/puntosdeventa",
    icon: <i className="fa-solid fa-id-card"></i>,
    title: "Puntos de venta",
    subBtn:["Crear puntos de venta", "Generar Secuencial","Actualizar puntos de venta","Eliminar puntos de venta", "Buscar Puntos de venta"],
  },
  {
    to: "/dashboard/clientes",
    icon: <i className="fa-solid fa-house"></i>,
    title: "Clientes",
    subBtn:["Crear Clientes", "Actualizar Clientes","Eliminar Clientes", "Buscar Cliente"],
  },
  {
    to: "/dashboard/features",
    icon: <i className="fa-solid fa-house"></i>,
    title: "Proveedores",
    subBtn:["Crear Proveedor", "Actualizar Proveedor","Eliminar Proveedor", "Buscar Proveedor"],
  },
  {
    to: "/dashboard/features",
    icon: <i className="fa-solid fa-house"></i>,
    title: "Configuración",
    subBtn:["Configurar datos para facturación", "Ingresar Secuencial de factura"],
  },
  {
    to: "/dashboard/features",
    icon: <i className="fa-solid fa-house"></i>,
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
          <li key={i}>{btn.title}</li>
        ))}
      </OrderList>
      </SideBarBody>
    </SideBarWrapper>
  );
};

export default SideBar;
