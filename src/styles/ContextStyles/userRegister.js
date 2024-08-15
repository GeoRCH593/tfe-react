import styled from "styled-components";

/*Container de formulario global */
export const RegisterBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #6D6C6C;
font-family: Open Sans;
`;

/*Container de formulario completo*/
export const FormContainer = styled.div`
background-color: #0C302E;
width: 400px;
height: 580px;
padding: 1rem 4rem;
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
color: #ffffff;
padding-bottom: 1rem;
text-align: center;
`;

/*Olvidaste la contraseña */
export const CheckUserPolitics = styled.p`
color: #fff;
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
color: #fff;
`;

export const LabelInputPolitics = styled.label`
display: flex;
color: #fff;
font-weight: 100;
font-size: 0.7rem;
gap: 1rem;
`;