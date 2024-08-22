import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Facturación"
const IconClass = "bi bi-receipt"

const makeCards = [
  {
    classDiv: "bi bi-receipt-cutoff",
    title: "Crear nueva factura",
    to: "crearnuevafactura"
  },
  {
    classDiv: "bi bi-arrow-left-right",
    title: "Modificar en borrador",
    to: "modificarenborrador"
  },
  {
    classDiv: "bi bi-check-square",
    title: "Finalizar factura en borrador",
    to: "finalizarfacturaenborrador"
  },
  {
    classDiv: "bi bi-file-earmark-x",
    title: "Eliminar factura en borrador",
    to: "eliminarfacturadeborrador"
  }, 
  {
    classDiv: "bi bi-search",
    title: "Buscar factura",
    to: "buscarfactura"
  },
  {
    classDiv: "bi bi-envelope-at",
    title: "Enviar factura por email",
    to: "enviarfacturaporemail"
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