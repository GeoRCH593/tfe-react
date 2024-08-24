import styled from "styled-components";

/* */
export const UserDataStyle = styled.div`
  display: flex;
  background: #39b84a1a;
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
  color: #909090;
  font-size: 13px;
  font-weight: 300;
  padding-left: 10px;
  h6 {
    color: #fff;
  }
  a {
    margin: 0;
    padding: 0;
    transition: all 0.4s ease-in;
    &:hover {
      color: #39b54a !important;
      cursor: pointer;
    }
  }
`;
