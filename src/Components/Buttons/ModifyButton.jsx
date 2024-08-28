
import {PropTypes} from 'prop-types';
import { ButtonModify, IconEditStyled } from './modifyButtonStyle';

const IconEdit = "bi bi-pencil-fill";

const ModifyButton = ({onClick}) => {
  return (
    <ButtonModify type='button' onClick={onClick}>
      <IconEditStyled className={IconEdit}></IconEditStyled>
    </ButtonModify>
  );
};

ModifyButton.propTypes = {
  onClick: PropTypes.func,
}


export default ModifyButton;