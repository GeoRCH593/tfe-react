import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Clientes"
const IconClass = "bi bi-person-lines-fill"

const makeCards = [
  {
    classDiv: "bi bi-person-add",
    title: "Crear clientes",
    to: "crearclientes"
  },
  {
    classDiv: "bi bi-person-up",
    title: "Actualizar clientes",
    to: "actualizarclientes"
  },
  {
    classDiv: "bi bi-person-dash",
    title: "Eliminar cliente",
    to: "eliminarcliente"
  },
  {
    classDiv: "bi bi-search",
    title: "Buscar cliente",
    to: "buscarclientes"
  }, 
];

const Clientes = () => {
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

export default Clientes;