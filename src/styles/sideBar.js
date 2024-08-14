import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: block;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
`;
/* Contenedor de la botonera*/
export const SideBarBody = styled.div`
  background-color: #0c302e;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 60px;
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
  font-weight: 600;
  position: relative;
  color: #909090;
  padding: 15px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 2px 10px;
  border-radius: 10px;
  &:hover {
    background: #39b54a1a;
    color: #39b54a;
    transition: all 0.5s ease-in-out;
  }
  &:active {
    background: #ffffff;
    color: #39b54a;
    transition: all 0.5s ease;
  }
`;

/*Estilos de los iconos botonera*/
export const Icon = styled.div`
  margin-right: 30px;
  font-size: 20px;
`;


export const LogoWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  > a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      width: 100px;
      height: 100px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        font-size: 60px;
        margin-left: 5px;
      }
    }
  }
`;

/*Estilo contenedor del footer */
export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0px -10px 14px -10px rgba(0, 0, 0, 0.22);
`;

export const Footer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0 0;
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

export const Subfooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #ffffff45;
  font-size: 12px;
  user-select: none;
  cursor: default;
`;

export const NavBtn = styled.div`
  position: relative;
  color: #909090;
  padding: 15px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 4px 10px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.open && "#fff"};
  &:hover {
    background: #39b54a1a;
    color: #39b54a;
    transition: all 0.5s ease-in-out;
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

export const Arrow = styled.div`
  position: absolute;
  color: #909090;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  > span {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 6px;
    border-color: transparent transparent transparent #ffffff;
    pointer-events: none;
    transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
    border-left: ${(props) => !props.open && "6px solid #39B54A"};
    transition: all 0.3s ease-in-out;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #00000029;
  overflow: hidden;
  height: ${(props) => (props.opened === "true" ? props.tall * 30 * 20 : 0)}px;
  transition: all 0.4s ease;
  padding: ${(props) => (props.opened === "true" ? "5px 0px" : "0px")};
  margin: 2px 0 2px;
`;

export const SubLinks = styled(NavLink)`
  color: #909090;
  font-size: 14px;
  height: 45px !important;
  padding: 0px 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  > span {
    margin-left: 14px;
  }
  &:hover {
    background: #39b54a1a;
    color: #39b54a;
    transition: all 0.4s ease-in-out;
  }
  &:active {
    background: #fff;
    color: #39b54a;
    transition: all 0.4s ease;
  }
`;

export const UserDataStyle = styled.div`
font-family: Roboto;
font-size: 13px;
font-weight: 300;
display: flex;
  background: #39b84a1a;
  color: #fff;

  > img {
    width: 100px;
    height: 100px;
    padding-right: 1rem;
  }
    > p {
      color: #909090;
    }
 
`;
