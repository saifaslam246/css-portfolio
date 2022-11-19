import styled from "styled-components";

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 768px) and (min-width: 200px) {
    flex-direction: column-reverse;
    margin-bottom: 50px;
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
  margin-right: 64px;
  position: relative;
  top: 10px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    width: 55%;
    margin-top: 50px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    top: 40px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    top: 110px;
    margin-bottom: 200px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    margin-left: 10px;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    /* background-color: red; */
  }
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
  border-left: 20px solid #64888f;
  border-bottom: 10px solid transparent;
`;

export const IconDiv = styled.div`
  margin-top: 35px;
  display: inline-block;
`;

export const HeaderCircle = styled.div`
  position: absolute;
  top: 0;
  /* left: 15%; */
  /* width: 35rem; */
  /* height: 17.5rem; */
  /* background-color: blue; */
  /* border-radius: 0rem 0rem 17.5rem 17.5rem; */
  /* transform: rotate(-30deg);s */
  z-index: -1;
  @media only screen and (max-width: 410px) and (min-width: 200px) {
    position: absolute;
    top: 120px;
    left: 24%;
    width: 18rem;
    height: 9rem;
    border-radius: 0rem 0rem 9rem 9rem;
    transform: rotate(-24deg);
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    position: absolute;
    top: 140px;
    left: 24%;
    width: 18rem;
    height: 9rem;
    border-radius: 0rem 0rem 9rem 9rem;
    transform: rotate(-24deg);
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    position: absolute;
    top: 190px;
    left: 12%;
    width: 26rem;
    height: 13rem;
    border-radius: 0rem 0rem 13rem 13rem;
    transform: rotate(-24deg);
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    position: absolute;
    top: 190px;
    left: 16%;
    width: 36rem;
    height: 18rem;
    border-radius: 0rem 0rem 18rem 18rem;
    transform: rotate(-24deg);
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    position: absolute;
    top: 250px;
    left: 9%;
    width: 24rem;
    height: 12rem;
    border-radius: 0rem 0rem 12rem 12rem;
    transform: rotate(-30deg);
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    position: absolute;
    top: 330px;
    left: 10%;
    width: 26rem;
    height: 13rem;
    border-radius: 0rem 0rem 13rem 13rem;
    transform: rotate(-30deg);
  }
`;

export const Profile = styled.img`
  position: absolute;
  width: 58%;
  height: 150%;
  top: -47%;
  left: 25%;
  border-radius: 50%;
  transform: rotate(30deg);
  /* background-color: red; */
  @media only screen and (max-width: 410px) and (min-width: 280px) {
    position: absolute;
    width: 75%;
    height: 190%;
    top: -95%;
    left: 10%;
    border-radius: 50%;
    transform: rotate(25deg);
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    position: absolute;
    width: 80%;
    height: 210%;
    top: -110%;
    left: 10%;
    border-radius: 50%;
    transform: rotate(25deg);
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    position: absolute;
    width: 73%;
    height: 205%;
    top: -107%;
    left: 12%;
    border-radius: 50%;
    transform: rotate(25deg);
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    position: absolute;
    width: 73%;
    height: 205%;
    top: -107%;
    left: 12%;
    border-radius: 50%;
    transform: rotate(25deg);
  }
  /* @media only screen and (max-width: 821px) and (min-width: 771px) {
    position: absolute;
    width: 58%;
    height: 150%;
    top: -47%;
    left: 25%;
    border-radius: 50%;
    transform: rotate(30deg);
    display: none;
  } */
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    position: absolute;
    width: 70%;
    height: 190%;
    top: -92%;
    left: 12%;
  }
`;
