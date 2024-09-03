import BillieLogo from "../../../assets/billie-logo-black-green.svg";
import {
  Menu4CardsContain,
  MenusBody,
  TitlePage,
} from "../../../styles/menuStyles/menu";
import MenuCard from "../../MenuCard/MenuCard";

const makeCards = [
  {
    classDiv: "bi bi-buildings",
    title: "Empresa",
    to: "/empresa" 
  },
  {
    classDiv: "bi bi-shop",
    title: "Puntos de venta",
    to: "/puntos-de-venta"
  },
  {
    classDiv: "bi bi-person-lines-fill",
    title: "Clientes",
    to:"/clientes"
  },
  {
    classDiv: "bi bi-person-rolodex",
    title: "Proveedores",
    to: "/proveedores"
  },
  {
    classDiv: "bi bi-gear-fill",
    title: "Configuración",
    to: "/configuracion"
  },
  {
    classDiv: "bi bi-receipt",
    title: "Facturación",
    to:'/facturacion'
  },
  {
    classDiv: "bi bi-person-x",
    title: "Cerrar Sesión",
    to: "/cerrar-sesion"
  },
  
]

const Home = () => {
  return (
    <MenusBody>
      <TitlePage>
        <img src={BillieLogo} />
        <h3>Bienvenido al Sistema de facturación:</h3>
        <p>Por favor selecciona una opción para iniciar</p>
      </TitlePage>
      <Menu4CardsContain>
        {makeCards.map((card, i)=>(
          <MenuCard key={i}
            to={card.to}
            classDiv={card.classDiv}
            title={card.title}
          />
        ))}
      </Menu4CardsContain>
    </MenusBody>
  );
};

export default Home;