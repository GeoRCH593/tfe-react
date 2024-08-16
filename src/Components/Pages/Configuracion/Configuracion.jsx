import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Configuración"
const IconClass = "bi bi-gear-fill"

const makeCards = [
  {
    classDiv: "bi bi-gear-wide-connected",
    title: "Configurar datos para facturación",
    to: "clientes/crear"
  },
  {
    classDiv: "bi bi-sort-numeric-down",
    title: "Ingresar secuencial de factura",
    to: "clientes/actualizar"
  },

];

const Configuracion = () => {
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

export default Configuracion;