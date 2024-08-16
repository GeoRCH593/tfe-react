import { CardContain, IconCard, TitleCard } from "./menuCardStyle";
import {PropTypes} from 'prop-types';


const MenuCard = ({title, classDiv, to}) => {
  return (
    <div>
      <CardContain to={to}>
        <IconCard className={classDiv}></IconCard>
        <TitleCard>{title}</TitleCard>
      </CardContain>
    </div>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string,
  classDiv: PropTypes.string,
  to: PropTypes.string,
};

export default MenuCard;