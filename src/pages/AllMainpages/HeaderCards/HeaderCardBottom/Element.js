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
    display: none;
  }
`;

export const UpperDiv = styled.div``;
export const UpperImage = styled.img`
  margin-top: 15px;
  margin-left: 60px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
export const CenterDiv = styled.div`
  margin-left: 50px;
  margin-top: -10px;
`;
export const Heading = styled.h1`
  font-size: 20px;
`;
export const Title = styled.p`
  margin-top: -10px;
  margin-left: 30px;
  font-size: 11px;
`;
export const BottomDiv = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  display: flex;
`;
export const Followers = styled.div`
  flex: 1;
`;
export const Tag = styled.p`
  font-size: 13px;
`;
export const Number = styled.h2`
  margin-top: -10px;
  margin-left: 15px;
`;
export const Following = styled.div`
  flex: 1;
`;
export const ShowIcons = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
`;