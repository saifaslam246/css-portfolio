import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 33%;
  height: 20%;
  border-radius: 20px;
  position: relative;
  top: 90px;
  left: 40px;
  @media only screen and (max-width: 410px) and (min-width: 200px) {
    width: 70%;
    position: relative;
    top: -10px;
    left: 213px;
  }
  @media only screen and (max-width: 414px) and (min-width: 410px) {
    width: 70%;
    position: relative;
    top: -10px;
    left: 230px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    width: 42%;
    position: relative;
    top: -35px;
    left: 310px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    width: 38%;
    position: relative;
    top: -80px;
    left: 460px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    width: 40%;
    top: 120px;
    left: 20px;
    height: 18%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    width: 38%;
    top: 130px;
    left: 300px;
    height: 18%;
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
  font-size: 1.2rem;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
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
  margin-top: -20px;
  font-size: 2.5rem;
  margin-bottom: 10px;
  background-color: white;
  /* z-index: 1; */
  @media only screen and (max-width: 414px) and (min-width: 200px) {
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
  font-size: 1rem;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
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
  }
  /* @media only screen and (max-width: 920px) and (min-width: 822px) {
    margin-left: 10px;
  } */
`;


export const RatioHeadingSpan = styled.span`
  color: green;
`;
