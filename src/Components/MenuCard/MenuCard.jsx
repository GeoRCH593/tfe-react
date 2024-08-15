import { CardContain, IconCard, TitleCard } from "./menuCardStyle";
import {PropTypes} from 'prop-types';


const MenuCard = ({title, classDiv}) => {
  return (
    <div>
      <CardContain>
        <IconCard className={classDiv}></IconCard>
        <TitleCard>{title}</TitleCard>
      </CardContain>
    </div>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string,
  classDiv: PropTypes.string,

};

export default MenuCard;