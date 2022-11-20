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
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-left: 10px;
    width: 250px;
    top: -240px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
    margin-left: 25px;
    width: 310px;
    top: -240px;
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
  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    margin-left: 60px;
  }
`;


export const RightHeader = styled.div`
  flex: 55%;
  margin-right: 64px;
  position: relative;
  top: 10px;
  margin-bottom: 400px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    width: 55%;
    margin-top: 50px;
    top: -80px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    top: 0px;
    margin-bottom: 270px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    top: 90px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    margin-left: 10px;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: -60px;
  }
`;


export const QuoteTag = styled.h4`
  color: #ff3333;
  font-size: 20px;
  margin-top: 100px;
  margin-bottom: -30px;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-top: -20px;
    margin-bottom: -20px;
    font-size: 12px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
    margin-top: 70px;
    margin-bottom: -15px;
    font-size: 17px;
  }
  @media only screen and (max-width: 768px) and (min-width: 767px) {
    margin-top: 30px;
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
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    height: 25px;
    width: 25px;
    margin-left: -5px;
  }
`;

export const HeartSpan = styled.span`
  background-color: "green";
`;


export const NameTag = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
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
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -20px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
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
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-top: -10px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
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
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-left: 40px;
  }
`;


export const IconDiv = styled.div`
  margin-top: 35px;
  display: inline-block;
`;


export const HeaderCircle = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
`;


export const Profile = styled.img`
  height: 500px;
  width: 500px;
  margin-left: 120px;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    height: 250px;
    width: 220px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 410px) and (min-width: 281px) {
    height: 350px;
    width: 350px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    height: 350px;
    width: 350px;
    margin-left: 27px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    height: 400px;
    width: 400px;
    margin-left: 70px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    height: 31rem;
    width: 31rem;
    margin-top: -5rem;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    height: 410px;
    width: 370px;
    margin-left: 25px;
    margin-top: 32px;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    height: 28.6rem;
    width: 24rem;
    margin-top: 3.2rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    height: 28.6rem;
    width: 26rem;
    margin-top: 3.6rem;
    margin-left: 90px;
  }
  @media only screen and (max-width: 1280px) and (min-width: 1025px) {
    height: 28.6rem;
    width: 28.6rem;
    margin-top: 3.6rem;
    margin-left: 90px;
  }
`;

