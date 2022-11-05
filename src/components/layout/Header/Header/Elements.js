import styled from "styled-components";

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    flex-direction: column;
  }
`;
export const LeftHeader = styled.div`
  flex: 45%;
  margin-left: 90px;
  position: relative;
  top: -30px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    margin-left: 25px;
    width: 310px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    margin-left: 25px;
    flex: 50%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: 40px;
  }
`;
export const RightHeader = styled.div`
  flex: 55%;
  margin-right: 65px;
  position: relative;
  top: 10px;

  @media only screen and (max-width: 414px) and (min-width: 200px) {
    width: 55%;
  }
  /* @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 25px;
  } */
  /* @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    margin-left: 25px;
    flex: 50%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: 40px;
  } */
`;

export const QuoteTag = styled.h4`
  color: #ff3333;
  font-size: 20px;
  margin-top: 100px;
  margin-bottom: -30px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    margin-top: 70px;
    margin-bottom: -15px;
    font-size: 17px;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    margin-top: 90px;
    font-size: 17px;
    margin-bottom: -15px;
  }
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
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    font-size: 2.9rem;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    font-size: 2.5rem;
  }
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
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    width: 120px;
    height: 120px;
    margin-left: -90px;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    width: 110px;
    height: 110px;
    margin-left: -60px;
  }
`;

export const About = styled.p`
  font-size: 1.1rem;
  font-family: "Barlow", sans-serif;
  color: #290505;
  @media only screen and (max-width: 4140px) and (min-width: 200px) {
    margin-top: -10px;
  }
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
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    position: absolute;
    top: 120px;
    left: 24%;
    width: 18rem;
    height: 9rem;
    border-radius: 0rem 0rem 9rem 9rem;
    transform: rotate(-24deg);
  }
  /* @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 821px) and (min-width: 770px) {
    margin-left: 25px;
    flex: 50%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: 40px;
  } */
`;

export const Profile = styled.img`
  position: absolute;
  width: 58%;
  height: 150%;
  top: -47%;
  left: 25%;
  border-radius: 50%;
  transform: rotate(30deg);
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    position: absolute;
    width: 75%;
    height: 190%;
    top: -95%;
    left: 10%;
    border-radius: 50%;
    transform: rotate(25deg);
  }
`;
