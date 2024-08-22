import { EditIconButton, IconEdit } from "./editButtonStyle";

const iconEdit = "bi bi-pencil-fill"

const EditButton = () => {
  return (
    <EditIconButton>
      <IconEdit className={iconEdit}>  Editar</IconEdit>
    </EditIconButton>
  );
};

export default EditButton;