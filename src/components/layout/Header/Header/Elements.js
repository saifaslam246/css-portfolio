import styled from "styled-components";

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 820px) and (min-width: 200px) {
    flex-direction: column;
  }
`;
export const LeftHeader = styled.div`
  flex: 50%;
  margin-left: 90px;
  position: relative;
  top: -30px;
  @media only screen and (max-width: 820px) and (min-width: 200px) {
    margin-left: 50px;
    width: 500px;
  }
`;
export const RightHeader = styled.div`
  flex: 50%;
  margin-right: 120px;
  position: relative;
  top: 10px;
  @media only screen and (max-width: 820px) and (min-width: 200px) {
    background-color: red;
  }
`;

export const QuoteTag = styled.h4`
  color: #ff3333;
  font-size: 20px;
  margin-top: 100px;
  margin-bottom: -30px;
`;
export const Heart = styled.img`
  height: 30px;
  width: 30px;
`;

export const HeartSpan = styled.span`
  background-color: "green";
`;

export const NameTag = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
`;

export const About = styled.p`
  font-size: 1.1rem;
  font-family: "Barlow", sans-serif;
  color: #290505;
`;

export const ButtonTag = styled.div``;
export const ButtonSign = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 60px;
  border-top: 10px solid transparent;
  border-left: 20px solid blue;
  border-bottom: 10px solid transparent;
`;
export const Circular = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fdb400;
  margin-left: -70px;
  margin-top: -30px;
  position: absolute;
  z-index: -1;
`;
export const IconDiv = styled.div`
  margin-top: 35px;
  display: inline-block;
`;

export const HeaderCircle = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  width: 35rem;
  height: 17.5rem;
  background-color: blue;
  border-radius: 0rem 0rem 17.5rem 17.5rem;
  transform: rotate(-30deg);
  z-index: -1;
  @media only screen and (max-width: 820px) and (min-width: 200px) {
    /* position: absolute;
    top: 156px;
    left: 32%;
    width: 28rem;
    height: 14rem;
    border-radius: 0rem 0rem 14rem 14rem;
    transform: rotate(-24deg); */
  }
`;

export const Profile = styled.img`
  position: absolute;
  width: 58%;
  height: 150%;
  top: -50%;
  left: 25%;
  border-radius: 50%;
  transform: rotate(30deg);
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    width: 100%;
    height: 210%;
    left: 12%;
    display: none;
  }
`;
