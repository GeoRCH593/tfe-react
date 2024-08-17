import { GlobalStyle } from "../../../styles/globalStyles";
import { PageBody } from "../../../styles/Subpages/subpagesStyles";

const Modul = "Empresa";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = 'Actualizar Datos'

const ActualizarDatos = () => {
  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
      <div>
        <i className={IconClass}></i>
        <h2>Módulo: {Modul}</h2>
      </div>
      <div>
        <div>
          <h5>{SubPageTitle}</h5>
        </div>
      </div>
    </PageBody>
  );
};

export default ActualizarDatos;
