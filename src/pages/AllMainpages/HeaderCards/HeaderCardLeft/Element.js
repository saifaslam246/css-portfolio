import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 21%;
  height: 4%;
  padding: 10px;
  border-radius: 10px;
  margin-left: 70%;
  position: absolute;
  top: 100px;
  left: 0px;
  background-color: white;

  @media only screen and (max-width: 410px) and (min-width: 280px) {
    width: 48%;
    height: 7%;
    position: absolute;
    top: 37px;
    left: -140px;
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    width: 45%;
    height: 7%;
    position: absolute;
    top: 40px;
    left: -150px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    width: 30%;
    height: 7%;
    position: absolute;
    top: 50px;
    left: -310px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    position: absolute;
    width: 27%;
    height: 7%;
    top: -10px;
    left: -450px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    width: 35%;
    margin-left: 70%;
    position: absolute;
    top: 120px;
    left: 0px;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30%;
  background-color: yellow;
  display: inline-block;
  vertical-align: middle;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    width: 15px;
    height: 15px;
    border-radius: 30%;
    margin-left: -5px;
  }
`;

export const CircularSpan = styled.span`
  margin-left: 5px;
  font-size: 16px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    font-size: 12px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    font-size: 17px;
    margin-left: 4px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    font-size: 24px;
    margin-left: 9px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    font-size: 16px;
    margin-left: 2px;
  }
`;

export const CircleDiv = styled.div`
  padding-top: 2px;
  margin-left: 3px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    padding-top: 0px;
    margin-left: 1px;
  }
`;
