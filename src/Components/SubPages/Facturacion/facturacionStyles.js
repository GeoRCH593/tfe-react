import styled from "styled-components";

export const FacturaBody =styled.div`

`;

/*Contendedor de cada input y label 1 columna*/
export const FactDiv = styled.div`
display: flex;
justify-content: flex-start;
padding: 0.3em 2em;
gap: 1em;
  > label {
    width: 40%;
    color: #0c302e;
    font-size: 0.9rem;
    font-weight: 700;
  }
  > input {
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