import styled from "styled-components";
import { AlertColor, GrayDarker, Light, Secondary } from "../common/colorStyles";

/*Container de formulario global */
export const RegisterBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: ${GrayDarker};
font-family: Open Sans;
`;

/*Container de formulario completo*/
export const FormContainer = styled.div`
background-color: ${Secondary};
width: 400px;
padding: 1rem 4rem 3em;
box-shadow: 0px 10px 20px 2px rgba(0,0,0,0.5);
border-radius: 5px;
`;

/*Contenedor del titulo h2*/
export const TitleContainer =styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

/*Estilos del Logotipo Aplicativo */
export const IconLogo = styled.img`
width: 80px;
height: 80px;
align-items: center;
justify-content: center;
`;

/*Titulo del formulario de registro */
export const TitleForm =styled.h6`
font-family: Open Sans;
font-weight: 100;
color: ${Light};
padding-bottom: 1rem;
text-align: center;
`;

/*Formulario de Ingreso*/
export const FormRegister = styled.form`
span {
    font-size: 0.7em;
    color: ${AlertColor};
    font-style: italic;
    padding-left: 1em;
  }
`;


/*Olvidaste la contraseña */
export const CheckUserPolitics = styled.p`
color: ${Light};
font-family: Open Sans;
font-size: 0.8rem;
font-weight: 100;
cursor: pointer;
`;
/*Contenedor botones nuevo usuario */
export const ButtonContain = styled.div`
display: flex;
padding-top: 2rem;
gap: 1em;
`;

/*Contenedor de dos inputs para contraseñas */
export const PassContain = styled.div`
display: flex;
gap: 1em;
`;

/*Aceptar terminos y condiciones de uso */
export const InputPolitics = styled.input`
color: ${Light};
`;

/*Contenedor de aceptar terminos y condiciones */
export const LabelInputPolitics = styled.label`
display: flex;
color: ${Light};
font-weight: 100;
font-size: 0.7rem;
gap: 1rem;
padding-top: 1em;
`;