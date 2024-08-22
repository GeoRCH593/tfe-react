import { EditIconButton, IconEdit } from "./editButtonStyle";
import {PropTypes} from 'prop-types';

const iconEdit = "bi bi-pencil-fill"

const EditButton = ({ onClick }) => {
  return (
    <EditIconButton type="button" onClick={onClick}>
      <IconEdit className={iconEdit}>  Editar</IconEdit>
    </EditIconButton>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.string,
}

export default EditButton;