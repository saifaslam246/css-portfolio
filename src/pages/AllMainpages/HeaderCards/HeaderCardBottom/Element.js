import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 31.5%;
  height: 38%;
  border-radius: 20px;
  position: relative;
  background-color: white;
  top: 30%;
  left: 6%;
  @media only screen and (max-width: 410px) and (min-width: 280px) {
    width: 60%;
    position: relative;
    left: 230px;
    top: 27px;
  }

  @media only screen and (max-width: 414px) and (min-width: 410px) {
    width: 60%;
    height: 38%;
    position: relative;
    left: 250px;
    top: 40px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    width: 40%;
    height: 35%;
    position: relative;
    left: 322px;
    top: 40px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    left: 480px;
    top: 70px;
  }
  @media only screen and (max-width: 821px) and (min-width: 771px) {
    width: 40%;
    height: 34%;
    top: 38%;
  }
  @media only screen and (max-width: 912px) and (min-width: 822px) {
    width: 37%;
    height: 34%;
    top: 43%;
    left: 70%;
  }
`;

export const UpperDiv = styled.div``;
export const UpperImage = styled.img`
  margin-top: 15px;
  margin-left: 60px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    margin-top: 20px;
    margin-left: 42px;
    height: 40px;
    width: 40px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 55px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 80px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 60px;
    height: 40px;
    width: 40px;
  }
`;
export const CenterDiv = styled.div`
  margin-left: 50px;
  margin-top: -10px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    margin-left: 10px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 32px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 20px;
  }
`;
export const Heading = styled.h1`
  font-size: 20px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    font-size: 18px;
  }
`;
export const Title = styled.p`
  margin-top: -10px;
  margin-left: 30px;
  font-size: 11px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    margin-top: -5px;
    margin-left: 0px;
    font-size: 11px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 30px;
    font-size: 15.3px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 25px;
    font-size: 10.4px;
  }
`;
export const BottomDiv = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  display: flex;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    margin-left: 9px;
  }
  @media only screen and (max-width: 540px) and (min-width: 415px) {
    margin-left: 12px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 23px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    margin-left: 10px;
  }
`;
export const Followers = styled.div`
  flex: 1;
`;
export const Tag = styled.p`
  font-size: 13px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    font-size: 8.5px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 912px) and (min-width: 771px) {
    font-size: 11.3px;
  }
`;
export const Number = styled.h2`
  margin-top: -10px;
  margin-left: 15px;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    margin-top: -5px;
    font-size: 25px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 770px) and (min-width: 541px) {
    margin-left: 24px;
  }
`;
export const Following = styled.div`
  flex: 1;
`;
export const ShowIcons = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  background-color: white;
  @media only screen and (max-width: 414px) and (min-width: 280px) {
    right: 8px;
  }
`;
