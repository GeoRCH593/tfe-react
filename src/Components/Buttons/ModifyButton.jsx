
import {PropTypes} from 'prop-types';
import { ButtonModify, IconEditStyled } from './modifyButtonStyle';

const IconEdit = "bi bi-pencil-fill";

const ModifyButton = ({botonFuncion}) => {
  return (
    <ButtonModify type='button' onClick={botonFuncion}>
      <IconEditStyled className={IconEdit}></IconEditStyled>
    </ButtonModify>
  );
};

ModifyButton.propTypes = {
  botonFuncion: PropTypes.func,
}


export default ModifyButton;