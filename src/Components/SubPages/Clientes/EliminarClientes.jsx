import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  SubTitleList,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import {useForm} from 'react-hook-form';

const Modul = "Clientes";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Eliminar Clientes";

const EliminarClientes = () => {

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
        <i className={IconClass}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={dataSubmit}>
          <FormDivSpan>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador", {required:true})}>
              <option value={""}>Seleccionar una opción</option>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            {errors.identificador && <span>* Obligado seleccionar opción</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId", {required:true})}/>
            {errors.numeroId && <span>* El número de identificación es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit 
           classIconId={"bi bi-search"} 
           submitText={"Buscar cliente"}
          />
          <br />
          <hr />
          <SubTitleList>
            <h5>Lista de Clientes: </h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código:</th>
                <th>Nombre:</th>
                <th>Tipo:</th>
                <th>Dirección</th>
                <th>Teléfono:</th>
                <th>Acción:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CL001</td>
                <td>Cliente 1</td>
                <td>Persona natural</td>
                <td>Calle 1 y Calle 2</td>
                <td>098 765 4321</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal classIconId={"bi bi-trash3"} textButton={"Eliminar"}/>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EliminarClientes;