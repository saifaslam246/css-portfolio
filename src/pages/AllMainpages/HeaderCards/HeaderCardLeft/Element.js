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
  top: 70px;
  left: 50px;
  background-color: white;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    width: 45%;
    height: 7%;
    position: absolute;
    top: 40px;
    left: -130px;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30%;
  background-color: yellow;
  display: inline-block;
  vertical-align: middle;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    width: 15px;
    height: 15px;
    border-radius: 30%;
    margin-left: -5px;
  }
`;

export const CircularSpan = styled.span`
  margin-left: 5px;
  font-size: 14px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    font-size: 11.8px;
    margin-left: 0px;
  }
`;

export const CircleDiv = styled.div`
  padding-top: 2px;
  margin-left: 3px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    padding-top: 0px;
    margin-left: 1px;
  }
`;
