import {Menu4CardsContain, MenusBody, TitlePage2} from '../../../styles/menuStyles/menu';
import MenuCard from '../../MenuCard/MenuCard';

const Modul = "Proveedores"
const IconClass = "bi bi-person-rolodex"

const makeCards = [
  {
    classDiv: "bi bi-person-add",
    title: "Crear Proveedor",
    to: "crearproveedor"
  },
  {
    classDiv: "bi bi-person-up",
    title: "Actualizar Proveedor",
    to: "actualizarproveedor"
  },
  {
    classDiv: "bi bi-person-dash",
    title: "Eliminar Proveedor",
    to: "eliminarproveedor"
  },
  {
    classDiv: "bi bi-search",
    title: "Buscar Proveedor",
    to: "buscarproveedor"
  }, 
];

const Proveedores = () => {
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

export default Proveedores;