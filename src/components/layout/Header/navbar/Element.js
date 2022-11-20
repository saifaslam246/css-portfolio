import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 1;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const Brand = styled.div`
  flex: 0.3;
  text-align: end;
`;

export const Logo = styled.img``;
export const NavSection = styled.div`
  flex: 2;
  text-align: center;
`;

export const LinkContainer = styled.ul`
  display: inline;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  padding: 0px 30px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 770px) and (min-width: 280px) {
    display: flex;
    float: right;
    margin-right: 30px;
    margin-top: 30px;
  }
`;

export const ButtonSection = styled.div`
  flex: 0.5;
`;
