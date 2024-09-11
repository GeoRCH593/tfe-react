import styled from "styled-components";
import {GrayLight, Secondary, DangerColor} from '../../../styles/common/colorStyles';

export const ConfDiv = styled.div`
display: flex;
flex-direction: column;
  padding: 0.3em 2em;
  width: 100%;
  gap: 0 2em;
  > label {
    color: ${Secondary};
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
  }
  > input {
    width: 75%;
    background-color: ${GrayLight};
    border: none;
    font-family: Open Sans;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
  }
  > select {
    width: 80%;
    background-color: ${GrayLight};
    border: none;
    font-size: 14px;
  }
  > span {
    font-size: 0.7em;
    color: ${DangerColor};
    font-style: italic;
    padding-left: 1em;
  }
`;