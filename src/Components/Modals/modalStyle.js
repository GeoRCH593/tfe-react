import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 2.5em;
`;

export const ContainerModal = styled.div`

  width: 500px;
  min-height: 100px;
  background: #faf9f9;
  position: relative;
  border-radius: 10px;
  border: solid 2px #39b54a;
  box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px;
  padding: 1.2em;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  border-bottom: 0.5px solid #39b54a;

  h3 {
    font-weight: 500;
    font-size: 1.4em;
    color: #39b54a;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  i {
    color: #000;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #39b54a;
    }
  }
`;

export const ContentModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;