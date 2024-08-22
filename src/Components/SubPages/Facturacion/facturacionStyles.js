import styled from "styled-components";

export const FactBody =styled.div`
  position: absolute;
  font-family: Open Sans;
  width: 100%;
  min-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  z-index: -1;
`;

export const FactSubBody = styled.div`
  min-width: 800px;
  background-color: #F4F4F4;
  padding: 1em 2em;
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
    font-size: 0.8rem;
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

/*Contendor de titulo formulario */
export const TitleSubpage = styled.div`
  display: flex;
  background-color: #0c302e;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;


/*Tabla de busqueda facturacion */
export const TableSearchDiv = styled.table`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  > thead {
    background: #dddddd;
    padding: 2em 2em;
    font-size: 13px;
    text-align: left;
  }
  > tbody {
    background: #fff;
    font-size: 13px;
    padding-top: 1em;
    > tr {
      padding: 1em 0 !important;
    }
  }
`;

/*Tabla de busqueda facturacion */
export const TableValues= styled.table`
  width: 100%;

  padding: 1em 0;
  > thead {
    background: #dddddd;
    padding: 2em 2em;
    font-size: 13px;
    text-align: left;
  }
  > tbody {
    background: #fff;
    font-size: 13px;
    font-weight: bold;
    padding-top: 1em;
    > tr {
      padding: 1em 0 !important;
    }
  }
`;