import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 300px;
height: 100vh;
display: block;
z-index: 100;
transition: transform 0.3s ease-in-out;
`;

export const SideBarBody = styled.div`
background-color: #0C302E;
height: 100vh;
overflow: hidden;
`;

export const OrderList = styled.ul`
position: relative;
color: white;
list-style: none;
padding: 0;
display: block;
transition: all 0.5s ease;
`;

export const NavLinks= styled(NavLink)`
position: relative;
color: #909090;
padding: 15px 20px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: left;
margin: 2px 10px;
border-radius: 10px;
&:hover{
  background: #ffffff24;
}
&:active{
  background: #ffffff;
  color: #4297ff;
  transition: all 0.4s ease;
}
`;

export const Icon = styled.div`
margin-right: 14px;
font-size: 20px;
`;