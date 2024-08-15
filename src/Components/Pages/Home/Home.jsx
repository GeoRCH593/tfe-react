import BillieLogo from "../../../assets/billie-logo-black-green.svg";
import {
  HomeBody,
  MenuCardsContain,
  TitlePage,
} from "../../../styles/pagesStyles/home";
import MenuCard from "../../MenuCard/MenuCard";

const Home = () => {
  return (
    <HomeBody>
      <TitlePage>
        <img src={BillieLogo} />
        <h2>Bienvenido:</h2>
      </TitlePage>
      <MenuCardsContain>
        <MenuCard classDiv={"bi bi-buildings"} class title={"Empresa"} />
        <MenuCard classDiv={"bi bi-shop"} class title={"Puntos de venta"} />
        <MenuCard
          classDiv={"bi bi-person-lines-fill"}
          class
          title={"Clientes"}
        />
        <MenuCard
          classDiv={"bi bi-person-rolodex"}
          class
          title={"Proveedores"}
        />
        <MenuCard classDiv={"bi bi-gear-fill"} class title={"Configuración"} />
        <MenuCard classDiv={"bi bi-receipt"} class title={"Facturación"} />
        <MenuCard classDiv={"bi bi-person-x"} class title={"Cerrar Sesión"} />
      </MenuCardsContain>
    </HomeBody>
  );
};

export default Home;
