import styled from "styled-components";
import { ColorHover, GrayDark, Light, Primary } from "../common/colorStyles";

/* */
export const UserDataStyle = styled.div`
  display: flex;
  background: ${ColorHover};
  align-items: center;
  justify-content: center;
  min-height: 8em;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

export const UserDataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Roboto;
  color: ${GrayDark};
  font-size: 13px;
  font-weight: 300;
  padding-left: 10px;
  h6 {
    color: ${Light};
  }
  a {
    color: ${GrayDark};
    text-decoration: none;
    margin: 0;
    padding: 0;
    transition: all 0.4s ease-in;
    &:hover {
      color: ${Primary} !important;
      cursor: pointer;
    }
  }
`;