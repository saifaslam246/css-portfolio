import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 33%;
  height: 20%;
  border-radius: 20px;
  position: relative;
  top: 70px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    display: none;
  }
`;

export const Heart = styled.img`
  vertical-align: middle;
  display: inlibe-block;
  height: 30px;
  width: 30px;
  margin-left: 15px;
`;

export const Heading = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  font-size: 1.2rem;
`;

export const HeadingCard = styled.h1`
  margin-left: 18px;
  margin-top: -20px;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const RatioHeading = styled.h4`
  margin-left: 22px;
  margin-top: -10px;
  font-size: 1rem;
`;

export const RatioHeadingSpan = styled.span`
  color: green;
`;