import {FormButton} from './buttonStyle.js';
import {PropTypes} from 'prop-types';


const ButtonContext = ({title, onClick}) => {
  return (
    <FormButton type='submit' onClick={onClick}>{title}</FormButton>
  );
};

ButtonContext.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.string,

};
export default ButtonContext;