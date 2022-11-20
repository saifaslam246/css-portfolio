import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 21%;
  height: 15%;
  padding: 10px;
  border-radius: 10px;
  margin-left: 70%;
  position: absolute;
  top: 100px;
  left: 0px;
  background-color: white;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    width: 45%;
    height: 14%;
    top: 40px;
    left: 75px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 410px) and (min-width: 281px) {
    width: 48%;
    height: 14%;
    position: absolute;
    top: 60px;
    left: 110px;
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    width: 48%;
    height: 15%;
    position: absolute;
    top: 60px;
    left: 110px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    width: 30%;
    height: 20%;
    position: absolute;
    top: 60px;
    left: 15px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    width: 30%;
    height: 22%;
    left: 0px;
    top: 0px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    width: 35%;
    height: 22%;
    left: 20px;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    width: 25%;
    height: 14%;
    left: 45px;
    top: 120px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    width: 29%;
    height: 14%;
    left: 25px;
    top: 140px;
  }
  @media only screen and (max-width: 1280px) and (min-width: 1025px) {
    width: 24%;
    height: 14%;
    left: -10px;
    top: 140px;
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
    margin-left: -5px;
  }
  @media only screen and (max-width: 912px) and (min-width: 910px) {
    width: 15px;
    height: 15px;
    margin-left: -5px;
  }
`;


export const CircularSpan = styled.span`
  margin-left: 5px;
  font-size: 16px;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    font-size: 8px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
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
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    font-size: 15px;
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
