import {
  Menu4CardsContain,
  MenusBody,
  TitlePage2,
} from "../../../styles/menuStyles/menu";
import MenuCard from "../../MenuCard/MenuCard";

const Modul = "Empresa";
const IconClass = "bi bi-building-fill";

const makeCards = [
  {
    classDiv: "bi bi-building-add",
    title: "Crear empresa",
    to: "crearempresa",
  },
  {
    classDiv: "bi bi-arrow-left-right",
    title: "Actualizar datos",
    to: "actualizardatos",
  },
  {
    classDiv: "bi bi-file-earmark-x",
    title: "Eliminar datos",
    to: "clientes",
  },
  {
    classDiv: "bi bi-binoculars",
    title: "Busqueda de empresas",
    to: "proveedores",
  },
  {
    classDiv: "bi bi-shop-window",
    title: "Crear Sucursal",
    to: "configuracion",
  },
  {
    classDiv: "bi bi-file-earmark-arrow-up",
    title: "Actualizar datos de sucursal",
    to: "facturacion",
  },
  {
    classDiv: "bi bi-folder-x",
    title: "Eliminar datos de sucursal",
    to: "cerrar-sesion",
  },
  {
    classDiv: "bi bi-search",
    title: "Buscar sucursal",
    to: "cerrar-sesion",
  },
];

const Empresa = () => {
  return (
    <MenusBody>
      <TitlePage2>
        <i className={IconClass}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage2>
      <Menu4CardsContain>
        {makeCards.map((card, i) => (
          <MenuCard
            key={i}
            to={card.to}
            classDiv={card.classDiv}
            title={card.title}
          />
        ))}
      </Menu4CardsContain>
    </MenusBody>
  );
};

export default Empresa;
