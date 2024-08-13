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
  background-color: #0c302e;
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

export const NavLinks = styled(NavLink)`
  font-family: Open Sans;
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

export const Icon = styled.div`
  margin-right: 30px;
  font-size: 25px;
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
