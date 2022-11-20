import styled from "styled-components";

export const BackContainer = styled.div`
  display: none;
  @media screen and (max-width: 770px) and (min-width: 280px) {
    display: flex;
    position: fixed;
    width: 70%;
    z-index: 1;
    background-color: black;
    height: 100%;
    top: 0%;
    transition: ${({ isOpen }) => (isOpen ? "0.2s ease-in" : "0.5s ease-in")};
    right: ${({ isOpen }) => (isOpen ? "26%" : "102%")};
  }
`;

export const NavbarContainer = styled.nav`
  display: none;
  @media screen and (max-width: 770px) and (min-width: 280px) {
    display: flex;
    position: fixed;
    width: 70%;
    z-index: 1;
    background-color: #ecff33;
    height: 100%;
    top: 0%;
    transition: 0.4s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? "30%" : "102%")};
  }
`;

export const Brand = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  margin-left: 20px;
  margin-top: 25px;
`;

export const NavSection = styled.div`
  flex: 2;
  margin-top: 130px;
  margin-bottom: 50px;
  text-align: center;
`;

export const LinkContainer = styled.ul`
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  padding: 20px 0px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 770px) and (min-width: 390px) {
    display: flex;
    float: right;
    margin-right: 50px;
    margin-top: -53px;
  }
  @media screen and (max-width: 393px) and (min-width: 280px) {
    display: flex;
    float: right;
    margin-right: 30px;
    margin-top: -53px;
  }
`;
