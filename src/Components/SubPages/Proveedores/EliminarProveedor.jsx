import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  SubTitleList,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import {useForm} from 'react-hook-form';

const Modul = "Proveedores";
const IconName = "bi bi-person-rolodex";
const SubPageTitle = "Eliminar Nuevo proveedor";

const EliminarProveedor = () => {

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
            <input type="text" {...register("numeroId", {required:true})} />
            {errors.numeroId && <span>* El número de identificación es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit
           classIconId={"bi bi-search"} 
           submitText={"Buscar Proveedor"}
          />
          <br />
          <hr />
          <SubTitleList>
            <h5>Lista de Proveedores: </h5>
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
          <ButtonNormal
            classIconId={"bi bi-trash3"}
            textButton={"Eliminar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EliminarProveedor;