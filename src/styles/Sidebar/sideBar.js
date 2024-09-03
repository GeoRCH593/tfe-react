import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ColorHover, GrayDark, GrayLighter, Light, Primary, Secondary, SmenuColor } from "../common/colorStyles";

/*Contenedor general sidebar */
export const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: block;
  transition: transform 0.3s ease-in-out;
`;
/* Contenedor de la botonera*/
export const SideBarBody = styled.div`
  background-color: ${Secondary};
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 60px;
  z-index: 5;
`;

/* Estilos de la botonera*/
export const OrderList = styled.ul`
  position: relative;
  color: white;
  list-style: none;
  padding: 0;
  display: block;
  transition: all 0.5s ease;
`;
/* Texto de la botonera */
export const NavLinks = styled(NavLink)`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 300;
  position: relative;
  color: ${GrayDark};
  padding: 10px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 2px 10px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${ColorHover};
    color: ${Light};
  }
  &:active {
    background: ${Light};
    color: ${Primary};
  }
`;

/*Estilos de los iconos botonera*/
export const Icon = styled.div`
  margin-right: 30px;
  font-size: 20px;
`;

/*Estilo FOOTER 1 contenedor */
export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6em;
  box-shadow: 0px -10px 14px -10px rgba(0, 0, 0, 0.22);
  z-index: 6;
  `;
/*Estilo FOOTER 2 contenedor */
export const Footer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5em 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  > img {
    width: 60px;
    height: 60px;
    padding-bottom: 1em;
    opacity: 0.5;
  }
`;
/*FOOTER 3 contenedor todos los derechos reservado*/
export const Subfooter = styled.div`
  position: absolute;
  bottom: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${GrayDark};
  font-size: 12px;
  user-select: none;
  cursor: default;
`;

/* Contenedor de links textos del menu sidebar */
export const NavBtn = styled(Link)`
  position: relative;
  color: ${GrayLighter};
  font-weight: 400;
  padding: 15px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 4px 10px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.open && "#fff"};
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${ColorHover};
    color: ${Primary};
    
  }
`;

export const Newest = styled.div`
  position: absolute;
  right: 1.2em;
  border-radius: 20px;
  font-size: 0.6em;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgb(0 0 0 / 91%);
`;
/*Estilos de flecha para los menus */
export const Arrow = styled.div`
  position: absolute;
  color: ${Light};
  top: 50%;
  right: 20px;
  transition: all 0.3s ease-in-out;
  transform: translate(0, -50%);
  > span {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 6px;
    border-color: transparent transparent transparent ${Light};
    pointer-events: none;
    transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
    border-left: ${(props) => !props.open && "6px solid #39B54A"};
    
  }
`;
/*Estilos de submenu listas */
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${SmenuColor};
  overflow: hidden;
  height: ${(props) => (props.opened === "true" ? props.tall * 30 * 0 : 0)}px;
  transition: all 0.6s ease-in-out;
  padding: ${(props) => (props.opened === "true" ? "4px 0px" : "0px")};
  margin: 2px 0 2px;
`;

/*Estilos de la lista de elementos del submenu  */
export const SubLinks = styled(NavLink)`
  color: ${Light};
  font-size: 14px;
  height: 45px !important;
  padding: 0px 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  > span {
    margin-left: 14px;
  }
  &:hover {
    background: ${ColorHover};
    color: ${Primary};
    
  }
  &:active {
    background: ${Light};
    color: ${Primary};
    transition: all 0.4s ease;
  }
`;