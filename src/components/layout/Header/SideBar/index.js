import { useState } from "react";
import {
  NavbarContainer,
  Brand,
  Logo,
  NavSection,
  LinkContainer,
  MobileIcon,
  BackContainer,
} from "./Element";
import { ContactButton } from "../../../custom/Button/ContactButton";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../../../../assets/logo.png";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Brand>
        <Logo src={logo} alt="logo" />
      </Brand>
      <BackContainer isOpen={isOpen}>
        <NavbarContainer isOpen={isOpen}>
          <NavSection>
            <LinkContainer to="/">Home</LinkContainer>
            <LinkContainer to="/">About</LinkContainer>
            <LinkContainer to="/">Services</LinkContainer>
            <LinkContainer to="/">Portfolio</LinkContainer>
            <ContactButton $width={"120px"} $fontSize={"16px"}>
              Contact Us
            </ContactButton>
          </NavSection>
        </NavbarContainer>
      </BackContainer>
      <MobileIcon>
        <Hamburger size={40} toggled={isOpen} toggle={setOpen} />
      </MobileIcon>
    </>
  );
};
export default Navbar;
