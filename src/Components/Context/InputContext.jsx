import { FormInput, FormContain } from "./inputStyle";
import {PropTypes} from 'prop-types';

const InputContext = ({ nameLabel, name, type, placeholder }) => {
  return (
    <FormContain>
      <label>
        {nameLabel}
        <FormInput
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </FormContain>
  );
};

InputContext.propTypes = {
  nameLabel: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,

};
export default InputContext;