import styled from "styled-components";

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 35%;
  height: 38%;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background-color: white;
  top: 30%;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    width: 60%;
    height: 38%;
    position: relative;
    z-index: 1;
    left: 230px;
    top: 40px;
  }
`;

export const UpperDiv = styled.div``;
export const UpperImage = styled.img`
  margin-top: 15px;
  margin-left: 60px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    margin-top: 20px;
    margin-left: 42px;
    height: 40px;
    width: 40px;
  }
`;
export const CenterDiv = styled.div`
  margin-left: 50px;
  margin-top: -10px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    margin-left: 10px;
  }
`;
export const Heading = styled.h1`
  font-size: 20px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    font-size: 15px;
  }
`;
export const Title = styled.p`
  margin-top: -10px;
  margin-left: 30px;
  font-size: 11px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    margin-top: -5px;
    margin-left: 0px;
    font-size: 11px;
  }
`;
export const BottomDiv = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  display: flex;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    margin-left: 9px;
  }
`;
export const Followers = styled.div`
  flex: 1;
`;
export const Tag = styled.p`
  font-size: 13px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    font-size: 8.5px;
  }
`;
export const Number = styled.h2`
  margin-top: -10px;
  margin-left: 15px;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    margin-top: -5px;
    font-size: 25px;
    margin-left: 5px;
  }
`;
export const Following = styled.div`
  flex: 1;
`;
export const ShowIcons = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  /* z-index: 1; */
  background-color: white;
  @media only screen and (max-width: 820px) and (min-width: 280px) {
    right: 8px;
  }
`;
