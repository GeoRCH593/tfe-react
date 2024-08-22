import styled from "styled-components";

export const ConfDiv = styled.div`
  padding: 0.3em 2em;
  width: 100%;
  gap: 2em;
  > label {
    color: #0c302e;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
  }
  > input {
    width: 75%;
    background-color: #e8eaed;
    border: none;
    font-family: Open Sans;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
  }
  > select {
    width: 80%;
    background-color: #e8eaed;
    border: none;
    font-size: 14px;
  }
`;