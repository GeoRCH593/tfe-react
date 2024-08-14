import { UserDataStyle } from "../../styles/sideBar";
import Billielogo from "../../assets/billie-icon.svg"

const User= "Nombre y Apellido"
const Admin = "Administrador"
const Pass = "Cambiar Contraseña"
const UpdateData = "Actualizar Datos"

const UserData = () => {
  return (
    <UserDataStyle>
      <img src={Billielogo}></img>
      <div>
      <p>{User}</p>
      <p>{Admin}</p>
      <p>{Pass}</p>
      <p>{UpdateData}</p>
      </div>
    </UserDataStyle>
  );
};

export default UserData;