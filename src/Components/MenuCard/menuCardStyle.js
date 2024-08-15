import styled from "styled-components";

export const CardContain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 140px;
height: 140px;
border-radius: 15px;
background: #0C302E;
box-shadow: 0px 7px 20px 0px gray;
cursor: pointer;
transition: all .5s ease-in-out;
> p {
  width: 130px;
  text-align: center;
  line-height: 1em;
}
&:hover{
  background: #39B54A;
  color: #0C302E;
  box-shadow: 0px 2px 10px 0px gray;
  > i {
    color: #0C302E;
  }
  > p {
    color: #0C302E;
  }
}
`;

export const IconCard = styled.i`
font-size: 40px;
color: #fff;
`;

export const TitleCard = styled.p`
font-family: Open Sans;
color: #fff;
font-size: 16px;
font-weight: 600;
`;