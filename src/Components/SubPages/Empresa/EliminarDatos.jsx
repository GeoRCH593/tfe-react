import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import {useForm} from 'react-hook-form';
const Modul = "Empresa";
const IconName = "bi bi-building-fill";
const SubPageTitle = "Eliminar Datos";

const EliminarDatos = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={dataSubmit}>
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId", { required: true })} />
            {errors.numeroId && <span>* Es obligatorio un numero de identificiación</span>}
          </FormDivSpan>
          <ButtonSubmit 
          classIconId={"bi bi-search"} 
           submitText={"Buscar"}
          />
          <br />
          <TableGeneral>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Empresa</th>
                <th>Selección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonSubmit
            classIconId={"bi bi-trash3"}
            submitText={"Eliminar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EliminarDatos;
