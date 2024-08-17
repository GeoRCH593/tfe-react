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
padding: 30px;
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
  padding: 5px 5px;
  width: 100%;
  > label {
    color: #0C302E;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 600;
  }
  > input {
  width: 75%;
  }
  > select {
  width: 80%
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

/*Contenedor boton enviar */
export const BtnContain = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 3em;
`;

/*BOTON ENVIAR */
export const BtnSubmit = styled.button`
width: 150px;
background: #0C302E;
color: #fff;
outline: none;
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