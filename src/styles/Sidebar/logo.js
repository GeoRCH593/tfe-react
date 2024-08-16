import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  > a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      width: 100px;
      height: 100px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 80px;
        margin-left: 5px;
      }
    }
  }
`;