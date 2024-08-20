import styled from "styled-components";

export const PageBody = styled.div`
position: absolute;
font-family: Open Sans;
left: 280px;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 0;
z-index: -1;
`;

/*Titulo de pagina titulo e icono */
export const TitlePage = styled.div`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  padding-bottom: 10px;
  > h2 {
    font-family: Open Sans;
    padding-top: 20px;
    font-weight: bold;
  }
  > i {
    font-size: 2rem;
    width: 50px;
    height: 100%;
    color: #0C302E;
    font-weight: bold;
  }
`;

/*Contenedor de Formulario Completo 1columna*/
export const FormComplete = styled.form`
display: flex;
flex-direction: column;
background: #F4F4F4;
min-width: 800px;
padding: 3em;
`;

/*Contendor de titulo formulario */
export const FormTitle = styled.div`
display: flex;
background-color: #0C302E;
color: #fff;
align-items: center;
justify-content: center;
padding: 5px;
`;

/*Contendedor de cada input y label 1 columna*/
export const FormDiv = styled.div`
  padding: .3em 2em;
  width: 100%;
  gap: 2em;
  > label {
    color: #0C302E;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 600;
  }
  > input {
  width: 75%;
  background-color: #E8EAED;
  border: none;
  font-family: Open Sans;
  transition: all .3s ease-in-out;

  }
  > select {
  width: 80%;
  background-color: #E8EAED;
  border: none;
  }
  
`;

/* Checkbox */
export const CheckBoxOne = styled.input`
  padding: 5px 5px;
  width: 100%;
  > label {
    color: #0C302E;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 500;
  }
  > input {
  width: 75%;
  }
  > select {
  width: 80%
  }
`;

/*Contenedor para 2 tablas CREAR BUSQUEDA ELIMINAR */
export const TablesContain = styled.div`
min-width: 900px;
background: #F4F4F4;
padding: 2em;
`;

/*Tabla de eliminar datos */
export const TableDeleteCompany =styled.table`
width: 100%;
align-items: center;
justify-content: center;
 > thead {
  background: #DDDDDD;
  padding: 2em 3em;
  font-size: 15px;
  text-align: left;
 }
 > tbody {
  background: #fff;
  padding-top: 1em;
  padding: 2em 3em;
 }
`;

/*Contenedor boton enviar */
export const BtnContain = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 3em;
`;

/*BOTON ENVIAR */
export const BtnSubmit = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5em;
padding: 0.2em 1.5em;
background: #0C302E;
color: #fff;
border: none;
font-family: Open Sans;
font-size: 1rem;
font-weight: bold;
border-radius: 15px;
transition: all .4s ease-in-out;
&:hover{
  background:  #39B54A;
}
`;