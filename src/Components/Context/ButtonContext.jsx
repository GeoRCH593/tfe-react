import {FormButton} from './buttonStyle.js';
import {PropTypes} from 'prop-types';


const ButtonContext = ({title}) => {
  return (
    <FormButton>{title}</FormButton>
  );
};

ButtonContext.propTypes = {
  title: PropTypes.string,

};
export default ButtonContext;