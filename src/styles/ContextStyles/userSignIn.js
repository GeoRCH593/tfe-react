import styled from "styled-components";

/*Container de formulario global */
export const SignInBody = styled.div`
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
width: 350px;
height: 450px;
padding: 2rem;
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
left: 50;
`;

/*Titulo del formulario de registro */
export const TitleForm =styled.h5`
font-family: Open Sans;
font-weight: 100;
color: #ffffff;
padding-bottom: 1rem;
text-align: center;
`;

export const FormS = styled.div`
margin: 2rem 0;
`;

export const FormImput = styled.input`
width: 100%;
border: 1px solid #ddd;
font-family: Roboto;
font-size: 1.2rem;
padding: 0.75rem;
`;
