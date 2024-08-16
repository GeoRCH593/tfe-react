import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Facturación"
const IconClass = "bi bi-receipt"

const makeCards = [
  {
    classDiv: "bi bi-receipt-cutoff",
    title: "Crear nueva factura",
    to: "facturacion/crear"
  },
  {
    classDiv: "bi bi-arrow-left-right",
    title: "Modificar el borrador",
    to: "facturacion/actualizar"
  },
  {
    classDiv: "bi bi-check-square",
    title: "Finalizar factura en borrador",
    to: "facturacion/eliminar"
  },
  {
    classDiv: "bi bi-file-earmark-x",
    title: "Eliminar factura en borrador",
    to: "facturacion/busqueda"
  }, 
  {
    classDiv: "bi bi-search",
    title: "Buscar factura",
    to: "facturacion/eliminar"
  },
  {
    classDiv: "bi bi-envelope-at",
    title: "Enviar factura por email",
    to: "facturacion/busqueda"
  }, 
];

const Facturacion = () => {
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

export default Facturacion;