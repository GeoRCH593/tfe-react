import { useEffect, useState } from "react";
import BillieLogo from "../../assets/billie-icon.svg";
import { Footer, FooterWrapper, Subfooter } from "../../styles/Sidebar/sideBar";

const SideBarFooter = () => {
  const [Year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  },[]);
  return (
    <FooterWrapper>
      <Footer>
        <img src={BillieLogo}></img>
      </Footer>
      <Subfooter>®{Year}. Todos los derechos reservados</Subfooter>
    </FooterWrapper>
  );
};

export default SideBarFooter;
