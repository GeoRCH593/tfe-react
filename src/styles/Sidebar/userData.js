import styled from 'styled-components';

/* */
export const UserDataStyle = styled.div`
font-family: Roboto;
padding: 20px 0;
font-size: 13px;
font-weight: 300;
display: flex;
background: #39b84a1a;
align-items: center;
justify-content: center;

  > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  > div {
      color: #909090;
      align-items: center;
      padding-left: 10px;
     
      > p {
        margin: 0;
        &:hover {
          color: #39B54A;
          cursor: pointer;
          transition: all .4s ease-in;
        }
      }
    }
 
`;