import {
  NavbarContainer,
  Brand,
  Logo,
  NavSection,
  LinkContainer,
  ButtonSection,
} from "./Element";
import { ContactButton } from "../../../custom/Button/ContactButton";
import logo from "../../../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Brand>
          <Logo src={logo} alt="logo" />
        </Brand>
        <NavSection>
          <LinkContainer to="/">Home</LinkContainer>
          <LinkContainer to="/">About</LinkContainer>
          <LinkContainer to="/">Services</LinkContainer>
          <LinkContainer to="/">Portfolio</LinkContainer>
        </NavSection>
        <ButtonSection>
          <ContactButton
            $width={"120px"}
            $fontSize={"16px"}
            $backgroundColor={"white"}
            $color={"black"}
          >
            Contact Us
          </ContactButton>
        </ButtonSection>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
