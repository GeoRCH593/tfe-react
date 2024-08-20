import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Puntos de venta"
const IconClass = "bi bi-shop"

const makeCards = [
  {
    classDiv: "bi bi-building-add",
    title: "Crear puntos de venta",
    to: "crearpos"
  },
  {
    classDiv: "bi bi-123",
    title: "Generar secuencial",
    to: "generarsecuencial"
  },
  {
    classDiv: "bi bi-arrow-left-right",
    title: "Actualizar puntos de venta",
    to: "actualizarpos"
  },
  {
    classDiv: "bi bi-file-earmark-x",
    title: "Eliminar Punto de venta",
    to: "eliminarpos"
  },
  {
    classDiv: "bi bi-search",
    title: "Buscar Punto de venta",
    to: "buscarpos"
  },
  
];

const Pos = () => {
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

export default Pos;