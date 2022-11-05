import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 33%;
  height: 20%;
  border-radius: 20px;
  position: relative;
  top: 70px;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    width: 70%;
    position: relative;
    top: -10px;
    left: 200px;
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
`;

export const HeadingCard = styled.h1`
  margin-left: 18px;
  margin-top: -20px;
  font-size: 2.5rem;
  margin-bottom: 10px;
  background-color: white;
  z-index: 1;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    margin-left: 11px;
    margin-top: -12px;
    font-size: 1.69rem;
    margin-bottom: 10px;
  }
`;

export const RatioHeading = styled.h4`
  margin-left: 22px;
  margin-top: -10px;
  font-size: 1rem;
  @media only screen and (max-width: 414px) and (min-width: 200px) {
    margin-left: 15px;
    font-size: 0.8rem;
  }
`;

export const RatioHeadingSpan = styled.span`
  color: green;
`;
