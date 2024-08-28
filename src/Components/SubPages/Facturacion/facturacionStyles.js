import styled from "styled-components";

/*Contenedor completo para facturación */
export const FactComplete = styled.div`
  position: absolute;
  font-family: Open Sans;
  width: 100%;
  left: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  z-index: -1;
`;

/*Contenedor seccion Facturacion */
export const FactBody = styled.div`
min-width: 900px;
`;

/*Contenedor interno para facturación */
export const FactSubBody = styled.div`
  min-width: 800px;
  background-color: #f4f4f4;
  padding: 1em 2em;
`;

/*Contenedor Parte Uno contiene dos divs izq y der Facturación*/
export const FactPartOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

/*Contenedor Parte Uno izquierda */
export const FactPartLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 1em 0;
  gap: 3px;
`;

/*Contenedor Parte Uno Derecha */
export const FactPartRight = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 1em 0;
  gap: 5px;
`;

/*Contenedor Parte Dos para busqueda */
export const FactPartTwo = styled.div`
padding: 1em 0;
`;

/*Contenedor Parte Tres Facturacion */
export const FactPartThree = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  align-items: start;
  justify-content: space-between;
`;

/*Contenedor de Numero de factura */
export const NumFactDiv = styled.div`
display: flex;
justify-content: end;
 > p {
  color: #39B54A;
  font-weight: bold;
 }
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
    width: 50%;
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
  padding: 2em 0;
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
      padding: 2em 0 !important;
    }
  }
`;

/*Tabla de busqueda facturacion */
export const TableValues = styled.table`
  width: 100%;

  padding: 1em 0;
  > thead {
    background: #dddddd;
    padding: 2em 2em;
    font-size: 13px;
    text-align: left;
  }
  > tbody {
    font-size: 13px;
    font-weight: bold;
    padding-top: 1em;
    > tr {
      padding: 1em 0 !important;
    }
  }
`;

/*Contenedor Para seleccionar datos de facturas borrador */
export const SearchFactDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

/*Campos de seleccion para facturacion */
export const SelectDiv = styled.div`
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

/*Contenedor para icono de busqueda e input  */

export const SearchTableDiv = styled.div`
display: flex;
padding: 3em 0 0;
gap: 1em;

> i {
  color: #39B54A;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #0C302E;
  }
}
 > input{
  width: 20em;
  border: none;
  background: none;


   &::placeholder {
    color: #39B54A;
  }
 }
`;

export const TwoButtonDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 2em;
padding: 2em 0;
;
`;
