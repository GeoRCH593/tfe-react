import BillieLogo from "../../assets/billie-icon.svg";
import { Footer, FooterWrapper, Subfooter } from "../../styles/sideBar";

const SideBarFooter = () => {
  return (
    <FooterWrapper>
      <Footer>
        <img src={BillieLogo}></img>
      </Footer>
      <Subfooter>®2024 Todos los derechos reservados</Subfooter>
    </FooterWrapper>
  );
};

export default SideBarFooter;
