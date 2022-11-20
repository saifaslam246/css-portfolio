import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 26%;
  height: 74%;
  border-radius: 20px;
  position: relative;
  top: 100px;
  left: 90px;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    width: 68%;
    position: relative;
    top: 44px;
    left: 3px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 410px) and (min-width: 281px) {
    width: 66%;
    position: relative;
    top: 60px;
    left: 3px;
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    width: 66%;
    position: relative;
    top: 60px;
    left: 7px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    width: 36%;
    position: relative;
    top: 60px;
    left: 20px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    width: 35%;
    top: -20px;
    left: 30px;
    /* height: 110%; */
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    width: 40%;
    top: 100px;
    left: 10px;
    height: 90%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    width: 28%;
    top: 140px;
    left: 130px;
    height: 57%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    width: 33%;
    top: 130px;
    left: 80px;
    height: 57%;
  }
  @media only screen and (max-width: 1280px) and (min-width: 1025px) {
    width: 27%;
    top: 130px;
    left: 80px;
    height: 70%;
  }
`;

export const Heart = styled.img`
  vertical-align: middle;
  display: inlibe-block;
  height: 30px;
  width: 30px;
  margin-left: 15px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    margin-left: 9px;
    height: 20px;
    width: 20px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    height: 25px;
    width: 25px;
    margin-left: 5px;
  }
  /* @media only screen and (max-width: 912px) and (min-width: 822px) {
    height: 25px;
    width: 25px;
    margin-left: 5px;
  } */
`;

export const Heading = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  font-size: 1rem;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-left: 2px;
    font-size: 0.6rem;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
    margin-left: 2px;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 4px;
    font-size: 1.65rem;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 3px;
    font-size: 0.9rem;
  }
  /* @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: 3px;
    font-size: 0.9rem;
  } */
`;

export const HeadingCard = styled.h1`
  margin-left: 18px;
  margin-top: -15px;
  font-size: 2rem;
  margin-bottom: 10px;
  background-color: white;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-left: 11px;
    margin-top: -12px;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
    margin-left: 11px;
    margin-top: -12px;
    font-size: 1.69rem;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 22px;
    margin-top: -27px;
    font-size: 2.9rem;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 8px;
    margin-top: -9px;
    font-size: 1.7rem;
  }
  /* @media only screen and (max-width: 912px) and (min-width: 822px) {
    margin-left: 8px;
    margin-top: -9px;
    font-size: 1.7rem;
  } */
`;

export const RatioHeading = styled.h4`
  margin-left: 22px;
  margin-top: -10px;
  font-size: 0.96rem;
  @media only screen and (max-width: 280px) and (min-width: 200px) {
    margin-left: 12px;
    font-size: 0.58rem;
  }
  @media only screen and (max-width: 414px) and (min-width: 281px) {
    margin-left: 15px;
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 25px;
    margin-top: -10px;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 10px;
    font-size: 0.82rem;
  }
  /* @media only screen and (max-width: 920px) and (min-width: 822px) {
    margin-left: 10px;
  } */
`;

export const RatioHeadingSpan = styled.span`
  color: green;
`;
