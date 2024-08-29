import { Link } from "react-router-dom";
import styled from "styled-components";
import { Light, Primary, Secondary } from "../../styles/common/colorStyles";

export const CardContain = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 140px;
height: 140px;
border-radius: 15px;
background: ${Secondary};
text-decoration: none;
box-shadow: 0px 7px 20px 0px gray;
cursor: pointer;
transition: all .5s ease-in-out;
> p {
  width: 130px;
  text-align: center;
  line-height: 1em;
}
&:hover{
  background: ${Primary};
  color: ${Secondary};
  box-shadow: 0px 2px 10px 0px gray;
  > i {
    color: ${Secondary};
  }
  > p {
    color: ${Secondary};
  }
}
`;

export const IconCard = styled.i`
font-size: 40px;
color: ${Light};
`;

export const TitleCard = styled.p`
font-family: Open Sans;
color: ${Light};
font-size: 16px;
font-weight: 600;
`;