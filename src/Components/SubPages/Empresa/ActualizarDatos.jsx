import { GlobalStyle } from "../../../styles/common/globalStyles";
import {PageBody, TitlePage, FormTitle, FormComplete, FormDiv, SubTitleList, TableGeneral, CheckboxDiv} from '../../../styles/Subpages/subpagesStyles';
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import ModifyButton from "../../Buttons/ModifyButton";
import {useForm} from 'react-hook-form';

const Modul = "Empresa";
const IconName = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar Datos";

const ActualizarDatos = () => {

  const { register, handleSubmit } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PageBody>
      <GlobalStyle />
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
            <h5>Busqueda de empresa:</h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>ID:</th>
                <th>Numero ID:</th>
                <th>Nombre:</th>
                <th>Dirección:</th>
                <th>Provincia</th>
                <th>Canton:</th>
                <th>Seleccionar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC</td>
                <td>0123456789</td>
                <td>Empresa 1</td>
                <td>Calle 1 y calle 2</td>
                <td>Azuay</td>
                <td>Cuenca</td>
                <td><input type="checkbox"></input></td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal 
           classIconId={"bi bi-search"} 
           textButton={"Busqueda de POS"}
          />
          <br />
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          <ModifyButton/>  
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId")}
              defaultValue={"0123456789"}
            />
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text" {...register("razonsocial")}
              defaultValue={"Geovanny Rodríguez"}
            />
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombrecomercial")}
              defaultValue={"Empresa 1"}
            />
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text" {...register("direccion")}
              defaultValue={"Calle 1 y Calle 2"}
            />
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text" {...register("provincia")}
            />
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Cantón:</label>
            <input type="text"></input>
          <ModifyButton />  
          </FormDiv>
          <CheckboxDiv>
            <input type="checkbox" />
            <label>Extranjero</label>
          </CheckboxDiv>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono")}
              defaultValue={"+593 0987654321"}
            />
          <ModifyButton />  
          </FormDiv>
          <CheckboxDiv>
            <input type="checkbox"/>
            <label>Obligado a llevar contabilidad</label>
          </CheckboxDiv>
          <FormDiv>
            <label>Subir imagen de logotipo:</label>
            <input type="file"/>
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo")}
              defaultValue={"empresa@gmail.com"}
            />
          <ModifyButton />  
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualizar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarDatos;
