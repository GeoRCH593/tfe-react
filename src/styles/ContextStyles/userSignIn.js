import styled from "styled-components";
import { FormDiv } from "../Subpages/subpagesStyles";

/*Container de formulario global */
export const SignInBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #6d6c6c;
  font-family: Open Sans;
`;

/*Container de FORMULARIO completo*/
export const FormContainer = styled.div`
  background-color: #0c302e;
  width: 350px;
  padding: 1rem 4rem 2em;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  span {
    color:#FF0000;
    font-size: 0.8em;
  }
`;

/*Contenedor del titulo h2*/
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*Formulario de Ingreso*/
export const FormSignIn = styled.form`

`;

/*Contenedor de Input y label para SIGN IN */
export const FormSignDiv = styled(FormDiv)`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0.2em 0;
label {
  width: 100%;
  font-size: 0.7em;
  color:#fff;
  font-weight: 200;
}
input {
  width: 100%;
  padding: 5px 15px;
  border-radius: 5px;
}
span{
  color:#FFA903;
  font-size: 0.7em;
}
`;

/*Estilos del Logotipo Aplicativo */
export const IconLogo = styled.img`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

/*Titulo del formulario de registro */
export const TitleForm = styled.h6`
  font-family: Open Sans;
  font-weight: 100;
  color: #ffffff;
  padding-bottom: 1rem;
  text-align: center;
`;

/*Olvidaste la contraseña */
export const ForgotPass = styled.p`
  color: #fff;
  font-family: Open Sans;
  font-size: 0.8rem;
  font-weight: 100;
  padding-top: 2em;
  cursor: pointer;
`;
/*Contenedor boton nuevo usuario */
export const NewUser = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3em;
  padding-top: 2rem;
  font-size: 0.7rem;
  transition: 0.4s ease-in-out all;
  p {
    color: #fff;
  }
  a {
    color: #909090 !important;
    cursor: pointer;

    &:hover {
      color: #39B54A !important;
    }
  }
`;
