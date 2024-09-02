import { GlobalStyle } from "../../../styles/common/globalStyles.js";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import { SubTitleList } from "../Empresa/eliminarDatosSucursalStyles";
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";
import ButtonSubmit from "../../Buttons/ButtonSubmit.jsx";
import ModifyButton from "../../Buttons/ModifyButton.jsx";
import { useForm } from "react-hook-form";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Actualizar Punto de venta";

const ActualizarPos = () => {
  
  const { register, handleSubmit } = useForm();

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
          <SubTitleList>
            <h5>Seleccionar de Puntos de venta:</h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursales</th>
                <th>Dirección</th>
                <th>POS</th>
                <th>Secuencial</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Nombre Empresa</td>
                <td>Nombre Sucursal</td>
                <td>Calle 1 y calle 2</td>
                <td>Punto de venta 001</td>
                <td>POS 002</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal
            classIconId={"bi bi-search"}
            textButton={"Busqueda de POS"}
          />
          <FormDiv>
            <label>Código secuencial:</label>
            <input
              type="number"
              {...register("codigo")}
              defaultValue={"001"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Empresa:</label>
            <select id="empresa" {...register("empresa")}>
              <option>Empresa 1</option>
              <option>Empresa 2</option>
              <option>Empresa 3</option>
            </select>
          </FormDiv>
          <FormDiv>
          <label>Sucursal:</label>
            <select id="sucursal" {...register("sucursal")}>
              <option>Sucursal 1</option>
              <option>Sucursal 2</option>
              <option>Sucursal 3</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Direccion de la empresa::</label>
            <input
              type="text"
              {...register("direccionempresa")}
              defaultValue={"Calle 1 y Calle 2"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Direccion de la sucursal </label>
            <input type="text" {...register("direccionsucursal")} 
              defaultValue={"Calle 3 y Calle 4"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Secuencial del Punto de venta:</label>
            <input type="text" {...register("secuencial")}
              defaultValue={"172"}
            />
            <ModifyButton />
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-arrow-left-right"}
            submitText={"Modificar POS"}
          />
          <br />
          <hr />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarPos;
