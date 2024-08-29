import { FormInput, FormContain } from "./inputStyle";
import { PropTypes } from "prop-types";

const InputContext = ({ nameLabel, typeInput, textInput }) => {
  return (
    <FormContain>
      <label>
        {nameLabel}
        <FormInput type={typeInput} placeholder={textInput} />
      </label>
    </FormContain>
  );
};

InputContext.propTypes = {
  nameLabel: PropTypes.string,
  typeInput: PropTypes.string,
  textInput: PropTypes.string,
};
export default InputContext;
